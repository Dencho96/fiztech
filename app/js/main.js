var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 30,
    loop: 'true',
    slidesPerView: 3,
    navigation: {
        prevEl: '.documents__btn--prev',
        nextEl: '.documents__btn--next',
      },
});