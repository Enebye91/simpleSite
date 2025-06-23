const menuToggleBtn = document.querySelector(".menu_toggle");
const navbarCenter = document.querySelector(".navbar_center");

menuToggleBtn.addEventListener("click", () => {
  const expanded =
    menuToggleBtn.getAttribute("aria-expanded") === "true" || false;
  menuToggleBtn.setAttribute("aria-expanded", !expanded);
  navbarCenter.classList.toggle("open");
});

// fetch("services.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.querySelector(".card_container");

//     data.forEach((service, index) => {
//       const card = document.createElement("div");
//       card.className = "card";

//       card.innerHTML = `
//         <img src="ikon${(index % 3) + 1}.svg" alt="Ikon ${
//         index + 1
//       }" class="card_icon" />
//         <h3 class="card_title">${service.title}</h3>
//         <p class="card_text">${service.content}</p>
//         <a href="#" class="card_button">Læs mere</a>
//       `;

//       container.appendChild(card);
//     });
//   })
//   .catch((error) => {
//     console.error("Fejl ved indlæsning af JSON:", error);
//   });
  

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

document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answerId = button.getAttribute("aria-controls");
      const answer = document.getElementById(answerId);
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-answer").forEach((el) => {
        el.classList.remove("show");
        el.hidden = true;
      });
      document
        .querySelectorAll(".faq-question")
        .forEach((btn) => btn.setAttribute("aria-expanded", "false"));

      if (!isExpanded) {
        answer.hidden = false;
        answer.classList.add("show");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
