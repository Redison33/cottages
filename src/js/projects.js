document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.projects__cards')) {
    for (const card of document.querySelector('.projects__cards').querySelectorAll('.card')) {
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
