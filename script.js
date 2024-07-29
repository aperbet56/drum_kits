// Récupération des éléments
const container = document.querySelector(".container");

// Création d'un tableau stocké dans la constante kits
const kits = ["crash", "kick", "snare", "tom"];

// Pour chaque élément du tableau
kits.forEach((kit) => {
  // Création de l'élément HTML button
  const btn = document.createElement("button");
  // Ajout de la classe btn
  btn.classList.add("btn");
  btn.textContent = kit;
  // Mise en place du style
  btn.style.backgroundImage = "url(images/" + kit + ".png)";
  // Ajout de l'élément HTML button dans le DOM
  container.appendChild(btn);
  // Création de l'élément HTML audio
  const audio = document.createElement("audio");
  audio.src = "sounds/" + kit + ".mp3";
  // Ajout de l'élément HTML audio dans le DOM
  container.appendChild(audio);
  // Ecoute de l'élément "click" sur le bouton
  btn.addEventListener("click", () => {
    // Lecture du fichier audio
    audio.play();
  });
});
