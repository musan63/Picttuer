<?php

// OAuthライブラリの読み込み
require "../twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//認証情報４つ
$consumerKey = "8aqrkTMqD1EAg1iJBVjiw0Q1Z";
$consumerSecret = "EuW9zEGbeLXhxi1DlI2ciAqR3KDvCetnONycCEXPlXSu0dVps0";
$accessToken = "2569296036-rYLoztgE5lucqcQRAJR2B2OXadRWkpPSmU1s3em";
$accessTokenSecret = "OF4dPsGATZ1JHo5sgrj1uEvEZKHMfX0ZhQUPiHmllkPTl";

//接続
$connection = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

// キーワードによるツイート検索
// jsでいう + は php では . に対応
/*
js
  var moji = def;
  "abc" + moji + "ghi"

  abcdefghi

php
  $moji = def;
  "abc".$moji."ghi"
  "abc{$moji}ghi"


*/

/*
$word = "卒業式";
$id = NULL;
$amount = 10;
*/

// $tweets_params = ['q' => {$word} ' ' {$id} ' filter:images' ,'count' => amount];
// ['q' => '検索キーワード(Twitterルール)', 'count' => 表示数]
$tweets_params = ['q' => 'ポケモン filter:images' ,'count' => 30];
$res = $connection->get('search/tweets', $tweets_params)->statuses;

/*
//レスポンス確認
var_dump($res);
*/

echo json_encode($res);
