document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.services-detail')) {
    const achievement = document.querySelector('.services-detail');
    const cards = achievement.querySelectorAll('.card');

    let currentIndex = 0;
    console.log(cards);

    cards[currentIndex].classList.add('card--active');
    setInterval(() => {
      cards[currentIndex].classList.remove('card--active');
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add('card--active');
    }, 5000);
  }

  if (document.querySelector('.material')) {
    const material = document.querySelector('.material');
    const tabs = material.querySelector('.material__tabs');
    const buttons = material.querySelector('.material__links ul');
    buttons.querySelectorAll('button')[0].classList.add('filter--active');
    tabs.querySelectorAll('.tab')[0].classList.add('tab--active');
    tabs.querySelectorAll('.tab')[0].style.height =
      tabs.querySelectorAll('.tab')[0].scrollHeight + 'px';

    for (const [index, button] of buttons.querySelectorAll('button').entries()) {
      button.addEventListener('click', () => {
        for (const ostButton of buttons.querySelectorAll('button')) {
          ostButton.classList.remove('filter--active');
        }

        for (const tab of tabs.querySelectorAll('.tab')) {
          tab.classList.remove('tab--active');
          tab.removeAttribute('style');
        }

        button.classList.add('filter--active');
        tabs.querySelectorAll('.tab')[index].classList.add('tab--active');
        tabs.querySelectorAll('.tab')[index].style.height =
          tabs.querySelectorAll('.tab')[index].scrollHeight + 'px';
      });
    }
  }
});
