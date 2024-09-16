$(function() {
  $(window).on('scroll', (e) => {
    console.log('scrollイベントが発生しました');
  });
});

$(window).on('load', (e) => {
    console.log('loadイベントが発生しました');
});
