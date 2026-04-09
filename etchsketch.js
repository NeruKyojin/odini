const container = document.getElementById("grid");
const rowInput = document.getElementById("rows");
const colInput = document.getElementById("cols");

function createGrid(rows, cols) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid");

        cell.addEventListener("click", () => {
            cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        });

    container.appendChild(cell);
}}

[rowInput, colInput].forEach(input => {
    input.addEventListener("input", () => {
        const rows = parseInt(rowInput.value) || 1;
        const cols = parseInt(colInput.value) || 1;
        createGrid(rows, cols);
    });
});

// initial grid
createGrid(parseInt(rowInput.value), parseInt(colInput.value));