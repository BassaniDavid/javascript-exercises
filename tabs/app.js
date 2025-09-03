const btnSto = document.getElementById("btn-storia");
const btnDes = document.getElementById("btn-descrizione");
const btnAlt = document.getElementById("btn-altitudine");
const text = document.getElementById("text");

btnSto.addEventListener("click", () => {
  text.innerHTML =
    "Il Monte Misma (1.160 m) si trova tra la Val Seriana e la Val Cavallina, a est di Bergamo. È una montagna di origine calcarea, abitata sin dall’antichità: lungo i suoi pendii sono state rinvenute tracce di insediamenti preromani e romani. Nel Medioevo ebbe importanza strategica come punto di controllo sui passaggi tra le valli, tanto che sui versanti si trovano resti di antiche mulattiere e piccoli insediamenti rurali. Conosciuto anche per la presenza dell’Eremo di Sant’Agostino, fu per secoli luogo di spiritualità e pellegrinaggio. Oggi è una meta apprezzata per escursioni e panorami che spaziano dalla pianura bergamasca fino alle Prealpi.";
  if (!btnSto.classList.contains("activ")) {
    btnSto.classList.add("activ");
    btnDes.classList.remove("activ");
    btnAlt.classList.remove("activ");
  }
});

btnDes.addEventListener("click", () => {
  text.innerHTML =
    "Il Monte Misma (1.160 m) si trova a est di Bergamo, tra la Val Seriana e la Val Cavallina. È una montagna calcarea ricca di boschi e sentieri, conosciuta per i panorami che spaziano dalla pianura bergamasca alle Prealpi. Sui suoi versanti si trova l’Eremo di Sant’Agostino, che ne accresce il valore storico e spirituale. Oggi è una meta molto frequentata da escursionisti e amanti della natura.";
  if (!btnDes.classList.contains("activ")) {
    btnSto.classList.remove("activ");
    btnDes.classList.add("activ");
    btnAlt.classList.remove("activ");
  }
});

btnAlt.addEventListener("click", () => {
  text.innerHTML = `Altitudini - Prealpi Bergamasche
  <ul>
    <li><strong>Monte Misma</strong> – 1.160 m</li>
    <li>Monte Cornagera – 1.312 m</li>
    <li>Pizzo Formico – 1.636 m</li>
    <li>Canto Alto – 1.146 m</li>
    <li>Monte Alben – 2.019 m</li>
    <li>Monte Venturosa – 1.999 m</li>
    <li>Monte Suchello – 1.541 m</li>
    <li>Monte Linzone – 1.392 m</li>
    <li>Monte Bronzone – 1.334 m</li>
  </ul>`;
  if (!btnAlt.classList.contains("activ")) {
    btnSto.classList.remove("activ");
    btnDes.classList.remove("activ");
    btnAlt.classList.add("activ");
  }
});
