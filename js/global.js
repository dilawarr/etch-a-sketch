function randomColor() {
	let R = Math.floor(Math.random() * 257);
	let G = Math.floor(Math.random() * 257);
	let B = Math.floor(Math.random() * 257);
	// console.log(`rgb(${R},${G},${B})`);
	return `rgb(${R},${G},${B})`;
}

function displayGrid(numCells) {
	const grid = document.querySelector(".grid");
	for (let i = 0; i < numCells; i++) {
		const newRow = document.createElement("div");
		newRow.classList.add("grid-rows");
		for (let j = 0; j < numCells; j++) {
			const newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			// console.log(newCell.style.width);
			// console.log(newCell.style.height);
			newCell.addEventListener("mouseenter", () => {
				newCell.style.backgroundColor = randomColor();
				// console.log(newCell.style.backgroundColor);
			});
			newRow.appendChild(newCell);
		}
		grid.appendChild(newRow);
	}
}

function removeGrid() {
	const grid = document.querySelector(".grid");
	grid.textContent = "";
}

let gridSize = 16;
displayGrid(gridSize);

const button = document.querySelector("button");
button.addEventListener("click", () => {
	gridSize = Math.floor(prompt("Enter new grid size (upto 64)", gridSize));
	if (gridSize <= 0 || Number.isNaN(gridSize)) {
		gridSize = 1;
	} else if (gridSize > 64) {
		gridSize = 64;
	}
	removeGrid();
	displayGrid(gridSize);
});
