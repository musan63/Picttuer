'use strict';

$(function() {
  const $keyword  = $('#keyword');
  const $hashtag  = $('#hashtag');
  const $accountId = $('#accountId');
  const $submit    = $('#submit');

/*
  // フォームチェック関数
  function isFormValid() {
    const isValid = $keyword.val().trim()
      || $hashtag.val().trim()
      || $accountId.val().trim();

    $submit.attr("disabled", !isValid);
  }

  // ページロード時にチェックを行う
  isFormValid();

  // フォームコントロールのイベントハンドラ
  $('input').on('keyup change', function() {
    isFormValid();
  });
  */

  function formval(id) {
    if(id.val() == "")
      return null;
    else
      return id.val();
  }

  // フォームが送信された時にアラートを表示する
  $('form').on('submit', (e) => {
    e.preventDefault();
    console.log( "keyword : " + formval($keyword) + "\n" + "hashtag : " + formval($hashtag) + "\n" + "accountId : " + formval($accountId) );
  });
});
