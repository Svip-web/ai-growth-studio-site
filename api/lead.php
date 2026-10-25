<?php
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
require __DIR__ . '/lead-lib.php';

function studio_reply(int $status, array $data): void {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? '';
    if (!in_array($method, ['GET', 'POST'], true)) {
        header('Allow: GET, POST'); studio_reply(405, ['ok' => false, 'code' => 'method']);
    }
    // Private sibling of public_html, never a publicly served file.
    $configPath = getenv('STUDIO_TELEGRAM_CONFIG') ?: dirname(__DIR__, 2) . '/private/ai-growth-telegram.php';
    if (!is_file($configPath)) studio_reply(503, ['ok' => false, 'code' => 'unavailable']);
    $config = require $configPath;
    $token = $config['bot_token'] ?? getenv('TELEGRAM_BOT_TOKEN') ?: '';
    $chat = (string) ($config['chat_id'] ?? getenv('TELEGRAM_CHAT_ID') ?: '');
    if (!preg_match('/^\d{8,}:[a-zA-Z0-9_-]{30,}$/D', $token) || !preg_match('/^-\d{5,}$/D', $chat)) {
        studio_reply(503, ['ok' => false, 'code' => 'unavailable']);
    }
    $secure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    $ownOrigin = ($secure ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? '');
    $origins = $config['allowed_origins'] ?? [$ownOrigin];
    if (!is_array($origins)) studio_reply(503, ['ok' => false, 'code' => 'unavailable']);
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '' && !in_array($origin, $origins, true)) studio_reply(403, ['ok' => false, 'code' => 'origin']);
    if ($method === 'POST' && $origin === '') studio_reply(403, ['ok' => false, 'code' => 'origin']);
    session_name('studio_lead');
    session_start(['use_strict_mode' => 1, 'cookie_httponly' => true, 'cookie_secure' => $secure, 'cookie_samesite' => 'Lax']);
    if (empty($_SESSION['lead_csrf'])) $_SESSION['lead_csrf'] = bin2hex(random_bytes(32));
    if ($method === 'GET') studio_reply(200, ['ok' => true, 'csrf' => $_SESSION['lead_csrf']]);
    if (!hash_equals($_SESSION['lead_csrf'], $_SERVER['HTTP_X_LEAD_CSRF'] ?? '')) {
        studio_reply(403, ['ok' => false, 'code' => 'csrf']);
    }
    if (strpos(strtolower($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
        studio_reply(415, ['ok' => false, 'code' => 'content_type']);
    }
    if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 16384) studio_reply(413, ['ok' => false, 'code' => 'size']);
    $raw = file_get_contents('php://input', false, null, 0, 16385);
    if (strlen($raw) > 16384) studio_reply(413, ['ok' => false, 'code' => 'size']);
    $input = json_decode($raw, true);
    if (!is_array($input)) studio_reply(400, ['ok' => false, 'code' => 'validation']);
    $lead = studio_validate($input);
    $id = $lead['request_id'];
    $fingerprint = hash('sha256', json_encode($lead));
    $requests = $_SESSION['lead_requests'] ?? [];
    foreach ($requests as $key => $record) if ($record['at'] < time() - 900) unset($requests[$key]);
    if (isset($requests[$id])) {
        $previous = $requests[$id];
        if ($previous['fingerprint'] !== $fingerprint) studio_reply(409, ['ok' => false, 'code' => 'duplicate']);
        if ($previous['status'] === 'sent') studio_reply(200, ['ok' => true]);
        if (in_array($previous['status'], ['sending', 'unknown'], true)) {
            studio_reply(409, ['ok' => false, 'code' => 'status_unknown']);
        }
    }
    $directory = $config['rate_limit_dir'] ?? dirname($configPath) . '/ai-growth-rate-limit';
    if (!studio_rate_limit($directory, $_SERVER['REMOTE_ADDR'] ?? 'unknown', $token)) {
        header('Retry-After: 900'); studio_reply(429, ['ok' => false, 'code' => 'rate_limit']);
    }
    // Keep the session locked while sending so a duplicate request cannot race it.
    $requests[$id] = ['at' => time(), 'fingerprint' => $fingerprint, 'status' => 'sending'];
    $_SESSION['lead_requests'] = $requests;
    $result = studio_deliver($token, $chat, studio_message($lead));
    $_SESSION['lead_requests'][$id]['status'] = $result;
    if ($result === 'sent') studio_reply(200, ['ok' => true]);
    studio_reply(502, ['ok' => false, 'code' => $result === 'unknown' ? 'status_unknown' : 'delivery']);
} catch (InvalidArgumentException $error) {
    studio_reply(400, ['ok' => false, 'code' => 'validation']);
} catch (Throwable $error) {
    // Never return provider responses, private paths, personal details or the bot token.
    studio_reply(503, ['ok' => false, 'code' => 'unavailable']);
}
