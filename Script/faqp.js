document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  function checkFaqVisibility() {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    faqItems.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        !item.dataset.animated
      ) {
        item.classList.add("visible");
        item.dataset.animated = "true"; 
      }
    });
  }

  window.addEventListener("scroll", checkFaqVisibility);
  window.addEventListener("resize", checkFaqVisibility);
  checkFaqVisibility(); 
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

   
    faqQuestions.forEach((btn) => {
      const otherAnswerId = btn.getAttribute("aria-controls");
      const otherAnswer = document.getElementById(otherAnswerId);
      btn.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
      otherAnswer.classList.remove("show");
    });


    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      answer.hidden = false;
      answer.classList.add("show");
    }
  });
});