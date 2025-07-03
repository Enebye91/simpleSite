document.addEventListener("DOMContentLoaded", () => {
  const offerContainer = document.querySelector(".offer_container");

  if (!offerContainer) return;

  function checkOffer() {
    const rect = offerContainer.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      offerContainer.classList.add("visible");
    } else {
      offerContainer.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkOffer);
  window.addEventListener("resize", checkOffer);
  checkOffer();
});

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card_container");

  if (!cardContainer) return;

  function checkOffer() {
    const rect = cardContainer.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      cardContainer.classList.add("visible");
    } else {
      cardContainer.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkOffer);
  window.addEventListener("resize", checkOffer);
  checkOffer();
});
