// Imposta il valore iniziale del contatore
let count = 0;

// Seleziona gli elementi HTML con cui interagire
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

// Aggiunge la funzione per il click sul pulsante "decrease"
decreaseBtn.addEventListener("click", function () {
  // Diminuisce il valore della variabile
  count--;
  if (count < 0) {
    // Cambia il colore del testo se il contatore è negativo
    counter.style.color = "red";
  } else {
    // Ripristina il colore del testo se il contatore è positivo
    counter.style.color = "black";
  }
  // Aggiorna il testo nella pagina
  counter.textContent = count;
});

// Aggiunge la funzione per il click sul pulsante "increase"
increaseBtn.addEventListener("click", function () {
  // Aumenta il valore della variabile
  count++;
  if (count < 0) {
    // Cambia il colore del testo se il contatore è negativo
    counter.style.color = "red";
  } else {
    // Ripristina il colore del testo se il contatore è positivo
    counter.style.color = "black";
  }
  // Aumenta il valore della variabile
  counter.textContent = count;
});

// Aggiunge la funzione per il click sul pulsante "reset"
resetBtn.addEventListener("click", function () {
  count = 0; // Riporta il valore della variabile a 0
  counter.textContent = count;
});
