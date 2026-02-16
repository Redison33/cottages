document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.catalog-detail__gallery', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      960: {
        spaceBetween: 16,
      },
    },
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
    responsive: [
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  function createArrow(direction) {
    const svg =
      direction === 'next'
        ? '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M0.398438 0.302734L5.89844 7.52496L0.398438 14.3027" stroke="black"/></svg>'
        : '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M6.13672 14.3154L0.636719 7.09321L6.13672 0.31543" stroke="black"/></svg>';

    return `<button type="button" class="slick-${direction}" aria-label="${direction === 'next' ? 'Следующий' : 'Предыдущий'}">${svg}</button>`;
  }

  if (document.querySelector('.equipment')) {
    const services = document.querySelector('.equipment');
    const tabs = services.querySelector('.equipment__buttons');
    const imgs = services.querySelector('.equipment__wrap');

    for (const [index, tab] of tabs.querySelectorAll('button').entries()) {
      tab.addEventListener('click', () => {
        for (const ostTab of tabs.querySelectorAll('button')) {
          ostTab.classList.remove('tab__button--active');
        }

        for (const img of imgs.querySelectorAll('.tab')) {
          img.classList.remove('tab--active');
        }

        tab.classList.add('tab__button--active');
        imgs.querySelectorAll('.tab')[index].classList.add('tab--active');
      });
    }
  }

  if (document.querySelector('.gift')) {
    const achievement = document.querySelector('.gift');
    const cards = achievement.querySelectorAll('.gift__card');

    let currentIndex = 0;

    cards[currentIndex].classList.add('card--active');
    setInterval(() => {
      cards[currentIndex].classList.remove('card--active');
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add('card--active');
    }, 5000);
  }

  if (document.querySelector('.design-swiper')) {
    const swiper3 = new Swiper('.design-swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.2,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});
