const review = [
  {
    nome: "Marco Rossi",
    recensione:
      "JavaScript è incredibilmente versatile. Lo uso sia per il frontend con React che per il backend con Node.js. La sua onnipresenza nel web development lo rende una competenza fondamentale.",
  },
  {
    nome: "Giulia Bianchi",
    recensione:
      "All'inizio la sua natura asincrona può essere un po' ostica, specialmente con callback e promise. Ma una volta che si padroneggiano async/await, tutto diventa più chiaro e potente.",
  },
  {
    nome: "Alessandro Russo",
    recensione:
      "Vengo da linguaggi fortemente tipizzati e il 'type coercion' di JavaScript a volte mi ha causato qualche grattacapo. L'uso di TypeScript ha risolto molti dei miei problemi.",
  },
  {
    nome: "Sofia Romano",
    recensione:
      "L'ecosistema di JavaScript è enorme! Ci sono librerie e framework per qualsiasi cosa. A volte è quasi troppo, ma è fantastico avere così tante opzioni a disposizione.",
  },
  {
    nome: "Francesco Ferrari",
    recensione:
      "Come principiante, ho trovato JavaScript abbastanza accessibile. Puoi vedere i risultati direttamente nel browser, il che è molto gratificante. Consiglio di iniziare da qui.",
  },
  {
    nome: "Chiara Esposito",
    recensione:
      "ES6 (ECMAScript 2015) è stato un punto di svolta. Ha introdotto classi, moduli, arrow function e molto altro, rendendo il codice molto più pulito e organizzato.",
  },
  {
    nome: "Lorenzo Ricci",
    recensione:
      "La sua flessibilità è sia una benedizione che una maledizione. Permette di scrivere codice in molti modi, ma senza una buona disciplina di team, può portare a codice difficile da mantenere.",
  },
  {
    nome: "Alice Conti",
    recensione:
      "La community di JavaScript è una delle più attive e di supporto che abbia mai visto. Ci sono un'infinità di tutorial, articoli e forum dove trovare aiuto per qualsiasi problema.",
  },
  {
    nome: "Davide Marino",
    recensione:
      "È un linguaggio in continua evoluzione. Ogni anno escono nuove specifiche che aggiungono funzionalità interessanti. Bisogna rimanere costantemente aggiornati, ma questo lo mantiene moderno.",
  },
  {
    nome: "Martina Gallo",
    recensione:
      "La gestione della memoria e il garbage collector funzionano bene nella maggior parte dei casi, ma per applicazioni ad alte prestazioni bisogna comunque prestare attenzione per evitare memory leak.",
  },
];

// --- Selezione degli Elementi del DOM ---
// Prendiamo i riferimenti agli elementi HTML che dobbiamo manipolare.
const reviewname = document.getElementById("review-name");
const reviewText = document.getElementById("review-text");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// --- Stato dell'Applicazione ---
// Usiamo una variabile per tenere traccia della recensione attualmente mostrata.
let currentItem = 0;

// --- Funzione Principale per l'Aggiornamento dell'UI ---
// Creiamo una funzione riutilizzabile che accetta un indice e aggiorna l'interfaccia utente.
function showReview(personIndex) {
  const item = review[personIndex];
  reviewname.textContent = item.nome;
  reviewText.textContent = item.recensione;
}

// --- Gestione degli Eventi ---

// Mostra la recensione iniziale non appena il contenuto della pagina è stato caricato.
window.addEventListener("DOMContentLoaded", () => {
  showReview(currentItem);
});

// Event listener per il pulsante "successivo"
btnNext.addEventListener("click", () => {
  currentItem++;
  // Se superiamo l'ultimo elemento, torniamo all'inizio.
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  console.log(currentItem);
  // Aggiorniamo la vista con la nuova recensione
  showReview(currentItem);
});

// Event listener per il pulsante "precedente"
btnPrev.addEventListener("click", () => {
  currentItem--;
  // Se andiamo sotto il primo elemento, andiamo alla fine.
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  console.log(currentItem);
  // Aggiorniamo la vista con la nuova recensione
  showReview(currentItem);
});
