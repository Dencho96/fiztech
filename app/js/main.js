var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    centeredSlides: 'true',
    loop: 'true',
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
    },
    navigation: {
        prevEl: '.documents__btn--prev',
        nextEl: '.documents__btn--next',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      991: {
        spaceBetween: 30
      }
    }
});

$(".header__menu").click(function(){
  $(".header__menu").toggleClass("is-active");
});

$('.header__menu').on('click', function() {
  $('.header__box').slideToggle();
});