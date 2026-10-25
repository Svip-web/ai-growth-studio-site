<?php
declare(strict_types=1);
require __DIR__ . '/../api/lead-lib.php';
function check(bool $condition): void { if (!$condition) throw new RuntimeException('Test failed'); }
$input = ['name' => 'Тест', 'contact' => '@studio_test', 'question' => '<b>not HTML</b>',
    'language' => 'en', 'source' => 'popup', 'request_id' => 'test_request_123456789'];
$lead = studio_validate($input);
check($lead['name'] === 'Тест');
check(strpos(studio_message($lead), '<b>not HTML</b>') !== false);
foreach ([['name'=>''], ['contact'=>'x'], ['name'=>str_repeat('я',101)], ['question'=>str_repeat('a',2501)],
    ['request_id'=>'short'], ['website'=>'spam'], ['name'=>['array']]] as $invalid) {
    $rejected = false;
    try { studio_validate(array_replace($input,$invalid)); } catch (InvalidArgumentException $e) { $rejected = true; }
    check($rejected);
}
$dir = sys_get_temp_dir() . '/studio-test-' . bin2hex(random_bytes(6));
for ($i=0;$i<5;$i++) check(studio_rate_limit($dir,'test-ip','test-secret'));
check(!studio_rate_limit($dir,'test-ip','test-secret'));
foreach (glob($dir.'/*.json') as $file) unlink($file);
rmdir($dir);
echo "PHP leads: Unicode bounds, validation, plain-text message and rate limit passed.\n";
