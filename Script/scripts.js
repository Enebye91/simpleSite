const menuToggle = document.querySelector(".menu_toggle");
const navbarCenter = document.querySelector(".navbar_center");

menuToggle.addEventListener("click", () => {
  navbarCenter.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro_section");

  if (!intro) return;

  function checkIntro() {
    const rect = intro.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      intro.classList.add("visible");
    } else {
      intro.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkIntro);
  window.addEventListener("resize", checkIntro);
  checkIntro();
});

document.addEventListener("DOMContentLoaded", () => {
  const bottom = document.querySelector(".bottom_left");

  if (!bottom) return;

  function checkBottom() {
    const rect = bottom.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      bottom.classList.add("visible");
    } else {
      bottom.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkBottom);
  window.addEventListener("resize", checkBottom);
  checkBottom();
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".tilgang_btn");

  if (!btn) return;

  function checkButton() {
    const rect = btn.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkButton);
  window.addEventListener("resize", checkButton);
  checkButton();
});
