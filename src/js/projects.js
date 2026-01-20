document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".projects__cards")) {
    for (const card of document
      .querySelector(".projects__cards")
      .querySelectorAll(".card")) {
      $(card).find(".slider").slick({
        dots: true,
        draggable: false,
        arrows: false,
      });
    }
  }
});
