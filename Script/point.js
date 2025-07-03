document.addEventListener("DOMContentLoaded", () => {
  const points = document.querySelectorAll(".point");

  function checkPoints() {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    points.forEach((point) => {
      const rect = point.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom > 0) {
        point.classList.add("visible");
      } else {
        point.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkPoints);
  window.addEventListener("resize", checkPoints);
  checkPoints(); 
});
