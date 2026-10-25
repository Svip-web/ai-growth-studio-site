<?php
declare(strict_types=1);

function studio_text($value, int $max): string {
    if (!is_string($value) || !preg_match('//u', $value)) throw new InvalidArgumentException('validation');
    $value = trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value));
    if (preg_match_all('/./us', $value) > $max) throw new InvalidArgumentException('validation');
    return $value;
}

function studio_validate(array $input): array {
    if (!empty($input['website'])) throw new InvalidArgumentException('validation');
    $lead = [
        'name' => studio_text($input['name'] ?? '', 100),
        'contact' => studio_text($input['contact'] ?? '', 150),
        'question' => studio_text($input['question'] ?? '', 2500),
        'language' => ($input['language'] ?? '') === 'en' ? 'en' : 'ru',
        'source' => ($input['source'] ?? '') === 'popup' ? 'popup' : 'contact',
        'request_id' => studio_text($input['request_id'] ?? '', 80)
    ];
    if ($lead['name'] === '' || preg_match_all('/./us', $lead['contact']) < 3 ||
        !preg_match('/^[a-zA-Z0-9_-]{16,80}$/D', $lead['request_id'])) {
        throw new InvalidArgumentException('validation');
    }
    return $lead;
}

function studio_message(array $lead): string {
    return "Новая заявка — AI Growth Studio\n\n" .
        "Имя: " . $lead['name'] . "\nКонтакт: " . $lead['contact'] .
        "\nЗапрос: " . ($lead['question'] !== '' ? $lead['question'] : 'Не указан') .
        "\n\nЯзык: " . strtoupper($lead['language']) .
        "\nФорма: " . ($lead['source'] === 'popup' ? 'Консультация (попап)' : 'Контакты') .
        "\nНомер: " . $lead['request_id'];
}

function studio_rate_limit(string $directory, string $ip, string $secret): bool {
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('storage');
    }
    $file = $directory . '/' . hash_hmac('sha256', $ip, $secret) . '.json';
    $handle = @fopen($file, 'c+');
    if (!$handle || !flock($handle, LOCK_EX)) throw new RuntimeException('storage');
    $state = json_decode(stream_get_contents($handle), true);
    if (!is_array($state) || ($state['until'] ?? 0) <= time()) $state = ['until' => time() + 900, 'count' => 0];
    $allowed = $state['count'] < 5;
    if ($allowed) {
        $state['count']++;
        rewind($handle); ftruncate($handle, 0); fwrite($handle, json_encode($state)); fflush($handle);
    }
    flock($handle, LOCK_UN); fclose($handle);
    return $allowed;
}

function studio_deliver(string $token, string $chat, string $message): string {
    $url = 'https://api.telegram.org/bot' . $token . '/sendMessage';
    $payload = json_encode(['chat_id' => $chat, 'text' => $message, 'disable_web_page_preview' => true], JSON_UNESCAPED_UNICODE);
    if (function_exists('curl_init')) {
        $curl = curl_init($url);
        curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'], CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 5, CURLOPT_TIMEOUT => 12, CURLOPT_SSL_VERIFYPEER => true]);
        $response = curl_exec($curl);
        $status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    } else {
        throw new RuntimeException('unavailable');
    }
    if ($response === false || $status === 0) return 'unknown';
    $result = json_decode($response, true);
    if ($status === 200 && is_array($result) && ($result['ok'] ?? false) === true) return 'sent';
    if (is_array($result) && ($result['ok'] ?? null) === false) return 'failed';
    return 'unknown';
}
