document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section_div");

  if (!sections.length) return;

  function checkSections() {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom > 0) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  window.addEventListener("resize", checkSections);
  checkSections();
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceHeader = document.querySelector(".service_h");
  const serviceArticle = document.querySelector(".service_point_wrapper");

  if (!serviceHeader || !serviceArticle) return;

  function checkVisibility() {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    [serviceHeader, serviceArticle].forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});
