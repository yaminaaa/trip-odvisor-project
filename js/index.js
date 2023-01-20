// fonction qui permet d'ajouter un titre "Hôtels" dans le sous-menu
function addTitle() {
  const containerElement = document.querySelector(".submenu");

  const newTitle = document.createElement("a");
  newTitle.className = "submenu_item";
  newTitle.textContent = "Hôtels";

  containerElement.append(newTitle);
}

// Objectif : écrire une boucle for qui permet d'appliquer 4 fois cette fonction addTitle
// création variable; condition pour continuer; augmentation variable
for (let count = 0; count < 4; count++) {
  // ici les instructions : on appelle la fonction addTitle pour ajouter un
  // titre "Hôtels" dans le sous-menu
  addTitle();
}