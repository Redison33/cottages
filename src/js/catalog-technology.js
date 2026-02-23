document.addEventListener('DOMContentLoaded', () => {
  for (const imgsWrap of document.querySelectorAll('.catalog-technology__wrap-imgs')) {
    for (const img of imgsWrap.querySelectorAll('img')) {
      if (imgsWrap.querySelectorAll('img').length > 1)
        img.style.width = `calc(100% / ${imgsWrap.querySelectorAll('img').length} - 10px)`;
    }
  }
});
