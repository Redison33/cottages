document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {});

  if (document.querySelector('#map')) {
    ymaps.ready(init);
  }
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map(
      'map',
      {
        center: [55.844619, 37.501093],
        zoom: 16,
        controls: [],
      },
      { suppressMapOpenBlock: true },
    );

    let myPlacemark = new ymaps.Placemark([55.844619, 37.501093], {
      iconCaption: ' Smola',
      hintContent: 'г. Москва, ул. Смольная, д. 2, Офис 511, 5 этаж',
      balloonContent: 'г. Москва, ул. Смольная, д. 2, Офис 511, 5 этаж',
    });
    // let myPlacemark = new ymaps.Placemark('г. Москва, ул. Смольная, д. 2', {});
    myMap.geoObjects.add(myPlacemark);
  }

  const getScrollWidth = () => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  };

  const allSelect = document.querySelectorAll('select');

  for (const select of allSelect) {
    select.selectedIndex = -1;

    const choices = new Choices(select, {
      searchEnabled: false,
      placeholder: true,
      placeholderValue: select.getAttribute('data-placeholder'),
      itemSelectText: '',
      noChoicesText: 'Отсутсвует элементов',
    });
  }

  if (document.querySelector('#bx-panel')) {
    document.querySelector('.header').style.top = 42 + document.querySelector('#bx-panel').scrollHeight + 'px';
  }

  document.querySelector('.header__burger').addEventListener('click', () => {
    if (document.querySelector('.header__burger').classList.contains('header__burger--active')) {
      document.querySelector('.header__burger').classList.remove('header__burger--active');
      document.querySelector('.header__nav').removeAttribute('style');
      document.body.removeAttribute('style');
      setTimeout(() => {
        document.querySelector('.header').removeAttribute('style');
      }, 300);
    } else {
      document.querySelector('.header__burger').classList.add('header__burger--active');
      document.querySelector('.header__nav').style.transform = 'scaleY(1)';
      if (window.screen.width <= 580) {
        document.querySelector('.header').style.borderRadius = '15px 15px 0 0';
      } else {
        document.querySelector('.header').style.borderRadius = '15px 15px 0 15px';
      }
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = getScrollWidth() + 'px';
    }
  });

  const headerMQ = window.matchMedia('(max-width: 1360px)');
  const footerMQ = window.matchMedia('(max-width: 560px)');

  function initHeaderNav() {
    const nav = document.querySelector('.header__nav');
    if (!nav) return;

    for (const link of nav.querySelectorAll('.list__item')) {
      if (link.dataset.inited) continue;
      link.dataset.inited = 'true';

      link.addEventListener('click', (e) => {
        const nested = link.querySelector('.nested');
        if (!nested || e.target.classList.contains('nested__link') || e.target.tagName === 'SPAN') return;

        e.preventDefault();

        const nestedEl = link.querySelector('.nested');
        const svg = link.querySelector('svg');

        if (nestedEl.style.height) {
          nestedEl.style.height = '';
          svg.style.transform = '';
        } else {
          nestedEl.style.height = nestedEl.scrollHeight + 'px';
          svg.style.transform = 'rotate(180deg)';
        }
      });
    }
  }

  function initFooterNav() {
    const nav = document.querySelector('.footer__nav');
    if (!nav) return;

    for (const list of nav.querySelectorAll('.nav__list')) {
      if (list.dataset.inited) continue;
      list.dataset.inited = 'true';

      const link = list.querySelector('.list__item');

      link.addEventListener('click', () => {
        if (list.style.height) {
          list.style.height = '';
          link.querySelector('svg')?.removeAttribute('style');
        } else {
          list.style.height = list.scrollHeight + 'px';
          link.querySelector('svg')?.style.setProperty('transform', 'rotate(180deg)');
        }
      });
    }
  }

  function handleHeaderChange(e) {
    if (e.matches) {
      initHeaderNav();
    }
  }

  function handleFooterChange(e) {
    if (e.matches) {
      initFooterNav();
    }
  }

  handleHeaderChange(headerMQ);
  handleFooterChange(footerMQ);

  headerMQ.addEventListener('change', handleHeaderChange);
  footerMQ.addEventListener('change', handleFooterChange);

  if (document.querySelector('.popular__slider')) {
    $('.popular__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: createArrow('next'),
      prevArrow: createArrow('prev'),

      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if (document.querySelector('.popular__slider'))
    for (const [index, card] of document.querySelector('.popular__slider').querySelectorAll('.slide').entries()) {
      $(card).find('.slide__slider').slick({
        dots: true,
        draggable: false,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000 + 500 * (index + 1),
      });

      card.querySelector('.open-modal').addEventListener('click', () => {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');

        modal.classList.add('modal');
        modal.classList.add('modal-object');
        overlay.classList.add('overlay');
        modal.innerHTML = `
      <button class="modal-close">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3333 1.645L14.6883 0L8.16667 6.52167L1.645 0L0 1.645L6.52167 8.16667L0 14.6883L1.645 16.3333L8.16667 9.81167L14.6883 16.3333L16.3333 14.6883L9.81167 8.16667L16.3333 1.645Z" fill="white"/>
        </svg>
      </button>
      
      <div class="modal__container">
      <div class="modal__slider slider">
      ${Array.from(card.querySelector('.slider').querySelectorAll('img'))
        .filter((img) => !img.classList.contains('slick-cloned'))
        .map(
          (img) => `
          <div class="modal__slide slide">
              <img src="${img.getAttribute('src')}" alt="${img.getAttribute('alt') || 'Изображение проекта'}">
          </div>
        `,
        )
        .join('')}
       
      </div>

      <h3>${card.querySelector('h3').textContent}</h3>

      <div class="modal__info">
        <div class="modal__info-wrap">
          <img src="./src/assets/img/square.svg" alt="Общая площадь" />

          <p>
          Общая площадь
          <br/>
          ${card.getAttribute('square')}
          </p>
        </div>

        <div class="modal__info-wrap">
          <img src="./src/assets/img/square.svg" alt="Жилая площадь" />

          <p>
          Жилая площадь
          <br/>
          ${card.getAttribute('effective_square')}
          </p>
        </div>

        <div class="modal__info-wrap">
          <img src="./src/assets/img/stair.svg" alt="Этаж" />

          <p>
          Этажи
          <br/>
          ${card.getAttribute('floor')}
          </p>
        </div>

        <div class="modal__info-wrap">
          <img src="./src/assets/img/bedroom.svg" alt="Размеры" />

          <p>
          Размеры
          <br/>
          ${card.getAttribute('length') + 'x' + card.getAttribute('width')}
          </p>
        </div>

        <div class="modal__info-wrap">
          <img src="./src/assets/img/bedroom.svg" alt="Спальня" />

          <p>
          Спальни
          <br/>
          ${card.getAttribute('room')}
          </p>
        </div>

        <div class="modal__info-wrap">
          <img src="./src/assets/img/toilet.svg" alt="Тулает" />

          <p>
          Санузел
          <br/>
          ${card.getAttribute('wc')}
          </p>
        </div>
      </div>
    </div>
      `;

        // <a href="${card.getAttribute("link")}">Перейти</a>

        modal.querySelector('.modal-close').addEventListener('click', () => {
          $('.modal__slider').slick('unslick');
          modal.remove();
          overlay.remove();
          document.body.removeAttribute('style');
        });

        document.body.appendChild(modal);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        $('.modal__slider').slick({
          dots: true,
          nextArrow: createArrow('next'),
          prevArrow: createArrow('prev'),
        });
      });
    }

  function createArrow(direction) {
    const svg =
      direction === 'next'
        ? '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M0.398438 0.302734L5.89844 7.52496L0.398438 14.3027" stroke="black"/></svg>'
        : '<svg width="7" height="15" viewBox="0 0 7 15" fill="none"><path d="M6.13672 14.3154L0.636719 7.09321L6.13672 0.31543" stroke="black"/></svg>';

    return `<button type="button" class="slick-${direction}" aria-label="${direction === 'next' ? 'Следующий' : 'Предыдущий'}">${svg}</button>`;
  }

  for (const accordion of document.querySelectorAll('.accordion')) {
    accordion.querySelector('button').addEventListener('click', () => {
      if (accordion.classList.contains('accordion--active')) {
        accordion.classList.remove('accordion--active');
        accordion.querySelector('.accordion__content').removeAttribute('style');
      } else {
        accordion.classList.add('accordion--active');
        accordion.querySelector('.accordion__content').style.height = accordion.querySelector('.accordion__content').scrollHeight + 'px';
      }
    });
  }
});
