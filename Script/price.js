document.addEventListener("DOMContentLoaded", () => {
  const sectionDiv = document.querySelector(".section_div");

  if (!sectionDiv) return;

  function checkVisibility() {
    const rect = sectionDiv.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      sectionDiv.classList.add("visible");
    } else {
      sectionDiv.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro_container");

  if (!intro) return;

  function checkVisibility() {
    const rect = intro.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      intro.classList.add("visible");
    } else {
      intro.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});
