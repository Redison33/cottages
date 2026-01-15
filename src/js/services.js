document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.2,
      slideShadows: false,
    },
  });
});
