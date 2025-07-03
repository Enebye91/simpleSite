document.addEventListener("DOMContentLoaded", () => {
  const lesson = document.querySelector(".lesson_container");

  function checkLesson() {
    if (!lesson) return;

    const rect = lesson.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      lesson.classList.add("visible");
    } else {
      lesson.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkLesson);
  window.addEventListener("resize", checkLesson);
  checkLesson();
});

