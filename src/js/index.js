document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.services')) {
    const services = document.querySelector('.services');
    const tabs = services.querySelector('.services__tabs');
    const imgs = services.querySelector('.services__imgs');

    for (const [index, tab] of tabs.querySelectorAll('.tab').entries()) {
      tab.addEventListener('click', () => {
        for (const ostTab of tabs.querySelectorAll('.tab')) {
          ostTab.classList.remove('tab--active');
        }

        for (const img of imgs.querySelectorAll('.tab-content')) {
          img.classList.remove('tab-content--active');
        }

        tab.classList.add('tab--active');
        imgs.querySelectorAll('.tab-content')[index].classList.add('tab-content--active');
      });
    }
  }
});
