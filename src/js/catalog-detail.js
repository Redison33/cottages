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

  $('.layout__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: createArrow('next'),
    prevArrow: createArrow('prev'),
  });

  function createArrow(direction) {
    const svg =
      direction === 'next'
        ? '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M0.398438 0.302734L5.89844 7.52496L0.398438 14.3027" stroke="black"/></svg>'
        : '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M6.13672 14.3154L0.636719 7.09321L6.13672 0.31543" stroke="black"/></svg>';

    return `<button type="button" class="slick-${direction}" aria-label="${direction === 'next' ? 'Следующий' : 'Предыдущий'}">${svg}</button>`;
  }
});
