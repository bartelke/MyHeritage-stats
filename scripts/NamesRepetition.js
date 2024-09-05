document.addEventListener("DOMContentLoaded", () => {
  const namesList = document.getElementById("names-list");
  let names = window.api.getNamesRepetition();

  names.forEach((name) => {
    const li = document.createElement("li");

    // Tworzymy dwa divy
    const nameDiv = document.createElement("div");
    const occurrencesDiv = document.createElement("div");

    // Ustawiamy zawartość divów
    nameDiv.textContent = name.first_name;
    occurrencesDiv.textContent = name.occurrences;

    // Dodajemy divy do li
    li.appendChild(nameDiv);
    li.appendChild(occurrencesDiv);

    // Dodajemy klasę dla stylizacji
    li.classList.add("names-list");

    namesList.appendChild(li);
  });
});
