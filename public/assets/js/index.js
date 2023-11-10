$(document).ready(function () {
  $('.news-list .fix-padding-col:lt(3)').show();
  var items = 6;
  var show = 3;
  $('#expand-item').click(function () {
    let shown = $('.news-list .fix-padding-col:visible').length + 3;
    if (shown < items) {
      $('.news-list .fix-padding-col:lt(' + shown + ')').show(300);
    } else {
      $('.news-list .fix-padding-col:lt(' + items + ')').show(300);
      $('.more').hide();
    }
    if (shown === items) {
      $("#expand-item").addClass("disable")
      $('#expand-item').prop('disabled', true)
    }
  })
})

MediaBox('.mediabox')
$(document).ready(function () {
  $('.client_slides').slick(
    {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
    }
  );
})








