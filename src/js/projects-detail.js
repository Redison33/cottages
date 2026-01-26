document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.projects-detail__gallery', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });
  const swiper2 = new Swiper('.projects-detail__slider', {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

  if (document.querySelector('.video')) {
    const video = document.querySelector('.video video');
    const videoButton = document.querySelector('.video button');

    videoButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        video.setAttribute('controls', true);
        videoButton.style.display = 'none';
        video.style.filter = 'none';
      }
    });
  }
});
