'use strict';

$(function() {
  const $keyword  = $('#keyword');
  const $hashtag  = $('#hashtag');
  const $accountId = $('#accountId');
  const $submit    = $('#submit');

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

  // フォームが送信された時にアラートを表示する
  $('form').on('submit', (e) => {
    e.preventDefault();
    // 本当はこの部分に実際の登録処理を書く
    alert('登録しました。');
  });
});
