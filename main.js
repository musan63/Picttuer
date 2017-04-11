'use strict';

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
    $keyword.val = formval($keyword);
    $hashtag.val = formval($hashtag);
    $accountId.val = formval($accountId);
    console.log( "keyword : " + $keyword.val + "\n" + "hashtag : " + $hashtag.val + "\n" + "accountId : " + $accountId.val );
  });
});

$.ajax({
    type: "POST",
    url: "./search/index.php",
    data: '$keyword&$hashtag&$accountId',
    success: function() {
            alert('success');
    }
});
