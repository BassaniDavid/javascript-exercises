// Attendiamo che il contenuto della pagina sia completamente caricato
document.addEventListener("DOMContentLoaded", () => {
  // Selezioniamo gli elementi del DOM con cui interagiremo
  const groceryForm = document.getElementById("grocery-form");
  const newItemInput = document.getElementById("new-item-input");
  const groceryList = document.getElementById("grocery-list");
  const resetButton = document.getElementById("reset-button");

  // Funzione per caricare gli articoli dal localStorage
  const getItemsFromStorage = () => {
    const items = localStorage.getItem("groceryItems");
    // Se ci sono articoli, li parsifichiamo da JSON, altrimenti torniamo un array vuoto
    return items ? JSON.parse(items) : [];
  };

  // Funzione per salvare gli articoli nel localStorage
  const saveItemsToStorage = (items) => {
    // Convertiamo l'array di articoli in una stringa JSON e la salviamo
    localStorage.setItem("groceryItems", JSON.stringify(items));
  };

  // Carichiamo gli articoli all'avvio
  let items = getItemsFromStorage();

  // Funzione per renderizzare (disegnare) la lista a schermo
  const renderList = () => {
    // Svuotiamo la lista attuale per evitare duplicati
    groceryList.innerHTML = "";

    // Per ogni articolo nel nostro array, creiamo un elemento <li>
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("grocery-item");

      // Aggiungiamo la classe 'completed' se l'articolo è segnato come tale
      if (item.completed) {
        li.classList.add("completed");
      }

      // Creiamo la checkbox per segnare come completato
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.completed;
      checkbox.classList.add("complete-checkbox");

      // Creiamo lo span con il testo dell'articolo
      const itemText = document.createElement("span");
      itemText.textContent = item.text;

      // Creiamo il pulsante per eliminare
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "×"; // Un carattere 'x' più carino
      deleteBtn.classList.add("delete-btn");

      // Aggiungiamo gli elementi al nostro <li>
      li.appendChild(checkbox);
      li.appendChild(itemText);
      li.appendChild(deleteBtn);

      // Aggiungiamo l'evento per cambiare lo stato al cambio della checkbox
      checkbox.addEventListener("change", () => {
        toggleCompleted(item);
      });

      // Aggiungiamo l'evento per eliminare l'articolo
      deleteBtn.addEventListener("click", () => {
        deleteItem(item);
      });

      // Aggiungiamo il <li> completo alla lista <ul>
      groceryList.appendChild(li);
    });
  };

  // Funzione per aggiungere un nuovo articolo
  const addItem = (text) => {
    if (text.trim() === "") return; // Non aggiungiamo articoli vuoti

    items.push({ text: text, completed: false });
    saveItemsToStorage(items);
    renderList(); // Renderizza la lista, incluso il nuovo elemento

    // Applica l'animazione all'ultimo elemento aggiunto
    const lastItemElement = groceryList.lastElementChild;
    if (lastItemElement) {
      lastItemElement.classList.add("item-enter");
      // Rimuoviamo la classe dopo l'animazione per pulizia
      lastItemElement.addEventListener(
        "animationend",
        () => {
          lastItemElement.classList.remove("item-enter");
        },
        { once: true }
      );
    }

    newItemInput.value = "";
    newItemInput.focus();
  };

  // Funzione per eliminare un articolo
  const deleteItem = (itemToDelete) => {
    const index = items.findIndex((i) => i === itemToDelete);
    if (index === -1) return;

    const itemElement = groceryList.children[index];

    // Se l'elemento esiste e non c'è già un'animazione di cancellazione in corso
    if (itemElement && !document.body.classList.contains("is-deleting")) {
      document.body.classList.add("is-deleting"); // Blocca altre interazioni
      itemElement.classList.add("item-exit"); // Aggiunge la classe per l'animazione

      // Alla fine dell'animazione, aggiorniamo i dati e la UI
      itemElement.addEventListener(
        "animationend",
        () => {
          items = items.filter((i) => i !== itemToDelete); // Rimuove l'elemento dall'array dati
          saveItemsToStorage(items);
          renderList(); // Ri-disegna la lista
          document.body.classList.remove("is-deleting"); // Sblocca le interazioni
        },
        { once: true }
      );
    }
  };

  // Funzione per cambiare lo stato completato/non completato
  const toggleCompleted = (itemToToggle) => {
    itemToToggle.completed = !itemToToggle.completed; // Inverte il valore booleano
    saveItemsToStorage(items);
    renderList();
  };

  // Gestore dell'evento di submit del form
  groceryForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene il ricaricamento della pagina
    addItem(newItemInput.value);
  });

  // Gestore dell'evento click sul pulsante di reset
  resetButton.addEventListener("click", () => {
    // Chiediamo conferma prima di procedere, per sicurezza
    const isConfirmed = confirm(
      "Sei sicuro di voler svuotare completamente la lista?"
    );

    if (isConfirmed) {
      items = []; // Svuota l'array in memoria
      saveItemsToStorage(items); // Salva lo stato vuoto nel localStorage
      renderList(); // Aggiorna la visualizzazione
    }
  });

  // Renderizza la lista per la prima volta quando la pagina viene caricata
  renderList();
});
