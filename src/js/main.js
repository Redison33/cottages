document.addEventListener('DOMContentLoaded', () => {
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
});
