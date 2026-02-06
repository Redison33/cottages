document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.catalog__cards')) {
    for (const card of document.querySelector('.catalog__cards').querySelectorAll('.card')) {
      const $slider = $(card).find('.slider');

      $slider.slick({
        dots: true,
        draggable: false,
        arrows: false,
      });

      let hoverInterval = null;

      $($slider).on('mouseenter', () => {
        if (hoverInterval) return;

        hoverInterval = setInterval(() => {
          $slider.slick('slickNext');
        }, 1500);
      });

      $($slider).on('mouseleave', () => {
        clearInterval(hoverInterval);
        hoverInterval = null;
      });
    }
  }
});
