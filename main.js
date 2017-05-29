'use strict'; // 厳格モード

$(function() {
  const $keyword  = $('#keyword');
  const $hashtag  = $('#hashtag');
  const $accountId = $('#accountId');
  const $submit    = $('#submit');

  function formval(id) {
    if(id["0"].value == "")
      return null;
    else
      return id["0"].value;
  }


  // フォームが送信された時
  $('form').on('submit', (e) => {
    e.preventDefault();
    /*const $save = [
      $keyword.val = formval($keyword),
      $hashtag.val = formval($hashtag),
      $accountId.val = formval($accountId)
    ];
    console.log(
      "keyword : " + $keyword.val + "\n" +
      "hashtag : " + $hashtag.val + "\n" +
      "accountId : " + $accountId.val
    );*/
    const $save = formval($keyword); // 1つずつまず渡してみる。
    //localStorage.setItem("sea", JSON.stringify($save)); // JSON(文字列)で保存
    //console.log(JSON.parse(localStorage.getItem("sea"))); // JSON(文字列)からjs表記
    localStorage.setItem("sea", $save);
  });
});

/*
$.ajax({
    type: "POST",
    url: "./search/index.php",
    data: '$keyword&$hashtag&$accountId',
    success: function() {
            console.log('success');
    }
});
*/
