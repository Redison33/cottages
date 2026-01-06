document.addEventListener("DOMContentLoaded", () => {
  const allSelect = document.querySelectorAll("select");

  for (const select of allSelect) {
    select.selectedIndex = -1;

    const choices = new Choices(select, {
      searchEnabled: false,
      placeholder: true,
      placeholderValue: select.getAttribute("data-placeholder"),
      itemSelectText: "",
      noChoicesText: "Отсутсвует элементов",
    });
  }

  if (document.querySelector("#bx-panel")) {
    document.querySelector(".header").style.top =
      42 + document.querySelector("#bx-panel").scrollHeight + "px";
  }

  document.querySelector(".header__burger").addEventListener("click", () => {
    if (
      document
        .querySelector(".header__burger")
        .classList.contains("header__burger--active")
    ) {
      document
        .querySelector(".header__burger")
        .classList.remove("header__burger--active");
      document.querySelector(".header__nav").removeAttribute("style");
      document.body.removeAttribute("style");
      setTimeout(() => {
        document.querySelector(".header").removeAttribute("style");
      }, 300);
    } else {
      document
        .querySelector(".header__burger")
        .classList.add("header__burger--active");
      document.querySelector(".header__nav").style.transform = "scaleY(1)";
      document.querySelector(".header").style.borderRadius = "15px 15px 0 15px";
      document.body.style.overflow = "hidden";
    }
  });

  if (window.screen.width <= 1360) {
    for (const link of document
      .querySelector(".header__nav")
      .querySelectorAll(".list__item")) {
      link.addEventListener("click", (e) => {
        if (link.querySelector(".nested")) {
          if (e.target.tagName !== "SPAN") {
            e.preventDefault();

            if (link.querySelector(".nested").getAttribute("style")) {
              link.querySelector(".nested").removeAttribute("style");
              link.querySelector("svg").removeAttribute("style");
            } else {
              link.querySelector(".nested").style.height =
                link.querySelector(".nested").scrollHeight + "px";
              link.querySelector("svg").style.transform = "rotate(180deg)";
            }
          }
        }
      });
    }
  }
});
