document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {});

  ymaps.ready(init);
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
});
