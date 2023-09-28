const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateColumns() {
    const columnsContainer = document.querySelector(".columns");
    columnsContainer.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        const columnInput = document.createElement("input");
        columnInput.type = "text";
        columnInput.classList.add("column-input");
        columnInput.placeholder = `Coluna ${i}`;

        columnDiv.appendChild(columnInput);
        columnsContainer.appendChild(columnDiv);
    }
}

document.getElementById("generateButton").addEventListener("click", () => {
    const letter = getRandomLetter();
    document.getElementById("letter").textContent = letter;

    generateColumns();
});
