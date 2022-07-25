$(document).ready(function () {


  let ww = $(window).width();

  layout1();

  function layout1() {
    if (ww > 960) {

      var swiper = new Swiper('.first', {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: true,
      });

      var swiper = new Swiper('.second', {
        loop: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 5,
        spaceBetween: 60,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          stretch: -200,
          depth: 300,
          modifier: 1,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      });

    }
  }

  $('#hamburger').click(function () {
    $(this).toggleClass('active');
    $('.hamburger-menu-box').toggleClass('active');
  });

  $(window).resize(function () {
    ww = $(window).width();
    layout1();
  })


});