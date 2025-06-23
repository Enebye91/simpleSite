const cards = [
  {
    icon: "ikon1.svg",
    title: "Massage",
    text: "Afslappende massage til hele kroppen.",
    buttonText: "Læs mere",
    link: "#massage"
  },
  {
    icon: "ikon2.svg",
    title: "Ansigtsbehandling",
    text: "Forkæl dit ansigt med en dybderens.",
    buttonText: "Se mere",
    link: "#ansigt"
  },
  {
    icon: "ikon3.svg",
    title: "Zoneterapi",
    text: "Behandling med fokus på fødder og balance.",
    buttonText: "Bestil tid",
    link: "#zoneterapi"
  },
  {
    icon: "ikon4.svg",
    title: "Akupunktur",
    text: "Naturlig lindring af smerter og spændinger.",
    buttonText: "Læs mere",
    link: "#akupunktur"
  },
  {
    icon: "ikon5.svg",
    title: "Wellness-pakke",
    text: "Kombination af flere behandlinger.",
    buttonText: "Opdag pakken",
    link: "#wellness"
  },
  {
    icon: "ikon6.svg",
    title: "Konsultation",
    text: "Få en professionel vurdering af dine behov.",
    buttonText: "Book nu",
    link: "#konsultation"
  }
];

const container = document.getElementById("cardContainer");

cards.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${card.icon}" alt="${card.title}" class="card_icon" />
    <h3 class="card_title">${card.title}</h3>
    <p class="card_text">${card.text}</p>
    <a href="${card.link}" class="card_button">${card.buttonText}</a>
  `;

  container.appendChild(div);
});
