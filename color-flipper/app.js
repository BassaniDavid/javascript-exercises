// Array con i caratteri validi per un codice colore esadecimale.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Seleziona l'elemento HTML del pulsante tramite il suo ID.
const btn = document.getElementById("btn");
// Seleziona l'elemento HTML <span> dove verrà mostrato il codice colore.
const color = document.getElementById("color");

// Funzione che genera un numero intero casuale tra 0 e la lunghezza dell'array 'hex' (0-15).
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Aggiunge un "ascoltatore" per l'evento 'click' sul pulsante.
// La funzione al suo interno viene eseguita ogni volta che il pulsante viene cliccato.
btn.addEventListener("click", function () {
  // Inizializza la stringa del colore con il carattere '#'.
  let hexColor = "#";
  // Esegue un ciclo 6 volte per costruire il codice esadecimale (es. #RRGGBB).
  for (let i = 0; i < 6; i++) {
    // Ad ogni ciclo, aggiunge un carattere casuale dall'array 'hex' alla stringa.
    hexColor += hex[getRandomNumber()];
  }

  // Aggiorna il testo dell'elemento <span> con il nuovo codice colore generato.
  color.innerHTML = hexColor;
  // Imposta il colore di sfondo della pagina (<body>) con il nuovo colore.
  document.body.style.backgroundColor = hexColor;
});
