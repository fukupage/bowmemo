<?php
ini_set('display_error', 1);
session_start();

$file = "log/log.json";
$json = file_get_contents($file);
$DATA = json_decode($json, true);

echo var_dump($DATA);
?>
