// Imposta il valore iniziale del contatore
let count = 0;

// Seleziona gli elementi HTML con cui interagire
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Aggiunge la funzione per il click sul pulsante "decrease"
decreaseBtn.addEventListener("click", function () {
  count--; // Diminuisce il valore della variabile
  counter.textContent = count; // Aggiorna il testo nella pagina
});

// Aggiunge la funzione per il click sul pulsante "increase"
increaseBtn.addEventListener("click", function () {
  count++; // Aumenta il valore della variabile
  counter.textContent = count; // Aggiorna il testo nella pagina
});

// Aggiunge la funzione per il click sul pulsante "reset"
resetBtn.addEventListener("click", function () {
  count = 0; // Riporta il valore della variabile a 0
  counter.textContent = count; // Aggiorna il testo nella pagina
});
