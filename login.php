<?php
ini_set('display_error', 1);
session_start();

$file = "user/user.json";
$json = file_get_contents($file);
$USER = json_decode($json, true);

// echo var_dump($USER);

//  とりあえず取得したデータとログインフォームの情報を比較

//  以下ログイン成功時の処理
//---------------------------------------------------



//  以下、ログイン失敗時の処理
//---------------------------------------------------


?>
