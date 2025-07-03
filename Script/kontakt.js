document.addEventListener("DOMContentLoaded", () => {
  const artikel = document.querySelector(".Kontakt_headline article");

  if (!artikel) return;

  function checkVisibility() {
    const rect = artikel.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      artikel.classList.add("visible");
    } else {
      artikel.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
  const artikel = document.querySelector(".kontakt_point");
  if (!artikel) return;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(artikel);
});
