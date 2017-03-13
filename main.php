<?php

// OAuthライブラリの読み込み
require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//認証情報４つ
$consumerKey = "8aqrkTMqD1EAg1iJBVjiw0Q1Z";
$consumerSecret = "EuW9zEGbeLXhxi1DlI2ciAqR3KDvCetnONycCEXPlXSu0dVps0";
$accessToken = "2569296036-rYLoztgE5lucqcQRAJR2B2OXadRWkpPSmU1s3em";
$accessTokenSecret = "OF4dPsGATZ1JHo5sgrj1uEvEZKHMfX0ZhQUPiHmllkPTl";

//接続
$connection = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

//ツイート
$res = $connection->post("statuses/update", array("status" => "テストメッセージ"));

//レスポンス確認
var_dump($res);
