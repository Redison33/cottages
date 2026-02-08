document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.catalog-detail__gallery', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {},
  });
  const swiper2 = new Swiper('.catalog-detail__slider', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
