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
        }, 2500);
      });

      $($slider).on('mouseleave', () => {
        clearInterval(hoverInterval);
        hoverInterval = null;
      });
    }
  }

  const rangeSlider = document.getElementById('rangeSlider');
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [50, 500],
      margin: 10,
      connect: true,
      step: 1,
      range: {
        min: [0],
        max: [560],
      },
    });
  }

  const input1 = document.getElementById('range-input-1');
  const input2 = document.getElementById('range-input-2');
  const inputs = [input1, input2];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });

  if (document.querySelector('.filter-list')) {
    if (document.querySelector('.filter-list active'))
      document.querySelector('.filter-list button').textContent = document.querySelector('.filter-list active').textContent;

    document.querySelector('.filter-list button').addEventListener('click', () => {
      if (document.querySelector('.filter-list__content').classList.contains('filter-list__content--active')) {
        document.querySelector('.filter-list__content').classList.remove('filter-list__content--active');
      } else {
        document.querySelector('.filter-list__content').classList.add('filter-list__content--active');
      }
    });
  }

  document.querySelector('.filter-open').addEventListener('click', () => {
    document.querySelector('.catalog__filter').classList.add('catalog__filter--active');
    document.body.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.addEventListener('click', () => {
      document.querySelector('.catalog__filter').classList.remove('catalog__filter--active');
      document.body.style.overflow = 'visible';
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });

  document.querySelector('.filter-close').addEventListener('click', () => {
    document.querySelector('.catalog__filter').classList.remove('catalog__filter--active');
    document.body.style.overflow = 'visible';
    document.querySelector('.overlay').remove();
  });
});
