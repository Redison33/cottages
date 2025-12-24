document.addEventListener('DOMContentLoaded', () => {
  allSelect = document.querySelectorAll('select');

  for (const select of allSelect) {
    const choices = new Choices(select);
  }
});
