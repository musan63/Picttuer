'use strict';

$(function() {
  const $keyword  = $('#keyword');
  const $hashtag  = $('#hashtag');
  const $accountId = $('#accountId');
  const $submit    = $('#submit');
  /*
  let $keyword_val = null;
  let $hashtag_val = null;
  let $accountId_val = null;
  // jsで変数はvarでなくlet?
  // さらに必要性低そう
  */

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
    // console.log( $keyword_val + "\n" + $hashtag_val + "\n" + $accountId_val );
    // console.logに直接処理を書く
    console.log( "keyword : " + formval($keyword) + "\n" + "hashtag : " + formval($hashtag) + "\n" + "accountId : " + formval($accountId) );
  });
});
