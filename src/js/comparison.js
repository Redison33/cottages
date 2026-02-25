document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.table');
  const thumb = document.querySelector('.thumb');
  const scrollbar = document.querySelector('.scrollbar');

  function checkScrollable() {
    const isScrollable = content.scrollWidth > content.clientWidth + 1;

    if (isScrollable) {
      scrollbar.style.display = '';
      updateThumb();
    } else {
      scrollbar.style.display = 'none';
      content.scrollLeft = 0;
    }
  }

  function updateThumb() {
    const maxScroll = content.scrollWidth - content.clientWidth;
    const maxLeft = scrollbar.clientWidth - 16;
    const ratio = content.scrollLeft / maxScroll || 0;
    thumb.style.left = ratio * maxLeft + 'px';
  }

  content.addEventListener('scroll', updateThumb);
  window.addEventListener('resize', updateThumb);

  //   content.addEventListener(
  //     'wheel',
  //     (e) => {
  //       const maxScroll = content.scrollWidth - content.clientWidth;

  //       if (maxScroll <= 0) return;

  //       const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

  //       const atStart = content.scrollLeft === 0;
  //       const atEnd = content.scrollLeft >= maxScroll;

  //       if ((atStart && delta < 0) || (atEnd && delta > 0)) {
  //         return; // позволяем странице скроллиться
  //       }

  //       e.preventDefault();
  //       content.scrollLeft += delta;
  //     },
  //     { passive: false },
  //   );

  let isDragging = false;
  let startX;
  let startLeft;

  thumb.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startLeft = thumb.offsetLeft;
    thumb.setPointerCapture(e.pointerId);
  });

  thumb.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const maxLeft = scrollbar.clientWidth - 16;

    const newLeft = Math.min(maxLeft, Math.max(0, startLeft + dx));

    thumb.style.left = newLeft + 'px';

    const ratio = newLeft / maxLeft;
    content.scrollLeft = ratio * (content.scrollWidth - content.clientWidth);
  });

  thumb.addEventListener('pointerup', () => {
    isDragging = false;
  });

  thumb.addEventListener('pointercancel', () => {
    isDragging = false;
  });

  checkScrollable();
});
