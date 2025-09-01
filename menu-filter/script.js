// importo l array di oggetti che contiene i dati del menu
import menu from "./menu.js";
console.log(menu);

const menuContainer = document.getElementById("menu-container");

// funzione per creare una card
function creaCard(piatto) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "30%";

  const titolo = document.createElement("h4");
  titolo.textContent = piatto.titolo + " " + piatto.costo + "€";
  titolo.classList.add("m-3");

  const descrizione = document.createElement("p");
  descrizione.textContent = piatto.descrizione;

  card.append(titolo, descrizione);
  return card;
}

// ciclo foreach per generare tutte le card
menu.forEach((piatto) => {
  menuContainer.appendChild(creaCard(piatto));
});

const btnAll = document.getElementById("all-btn");
const btnBreakfast = document.getElementById("breakfast-btn");
const btnLunch = document.getElementById("lunch-btn");
const btnDrinks = document.getElementById("drinks-btn");

btnAll.addEventListener("click", () => {
  btnAll.className = "btn btn-dark mx-2";
  btnBreakfast.className = "btn btn-outline-dark mx-2";
  btnLunch.className = "btn btn-outline-dark mx-2";
  btnDrinks.className = "btn btn-outline-dark mx-2";

  menuContainer.innerHTML = "";
  menu.forEach((piatto) => {
    menuContainer.appendChild(creaCard(piatto));
  });
});

btnBreakfast.addEventListener("click", () => {
  btnAll.className = "btn btn-outline-dark mx-2";
  btnBreakfast.className = "btn btn-dark mx-2";
  btnLunch.className = "btn btn-outline-dark mx-2";
  btnDrinks.className = "btn btn-outline-dark mx-2";

  menuContainer.innerHTML = "";
  menu.forEach((piatto) => {
    if (piatto.categoria === "colazione") {
      menuContainer.appendChild(creaCard(piatto));
    }
  });
});

btnLunch.addEventListener("click", () => {
  btnAll.className = "btn btn-outline-dark mx-2";
  btnBreakfast.className = "btn btn-outline-dark mx-2";
  btnLunch.className = "btn btn-dark mx-2";
  btnDrinks.className = "btn btn-outline-dark mx-2";

  menuContainer.innerHTML = "";
  menu.forEach((piatto) => {
    if (piatto.categoria === "pranzo") {
      menuContainer.appendChild(creaCard(piatto));
    }
  });
});

btnDrinks.addEventListener("click", () => {
  btnAll.className = "btn btn-outline-dark mx-2";
  btnBreakfast.className = "btn btn-outline-dark mx-2";
  btnLunch.className = "btn btn-outline-dark mx-2";
  btnDrinks.className = "btn btn-dark mx-2";

  menuContainer.innerHTML = "";
  menu.forEach((piatto) => {
    if (piatto.categoria === "bibite") {
      menuContainer.appendChild(creaCard(piatto));
    }
  });
});
