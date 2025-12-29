document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".services")) {
    const services = document.querySelector(".services");
    const tabs = services.querySelector(".services__tabs");
    const imgs = services.querySelector(".services__imgs");

    for (const [index, tab] of tabs.querySelectorAll(".tab").entries()) {
      tab.addEventListener("click", () => {
        for (const ostTab of tabs.querySelectorAll(".tab")) {
          ostTab.classList.remove("tab--active");
        }

        for (const img of imgs.querySelectorAll(".tab-content")) {
          img.classList.remove("tab-content--active");
        }

        tab.classList.add("tab--active");
        imgs
          .querySelectorAll(".tab-content")
          [index].classList.add("tab-content--active");
      });
    }
  }

  if (document.querySelector(".achievement")) {
    const achievement = document.querySelector(".achievement");
    const cards = achievement.querySelectorAll(".achievement__card");

    let currentIndex = 0;

    cards[currentIndex].classList.add("card--active");
    setInterval(() => {
      cards[currentIndex].classList.remove("card--active");
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add("card--active");
    }, 5000);
  }
});
