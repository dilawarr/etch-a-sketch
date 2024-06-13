function displayGrid(numCells) {
	console.log("test");
	const container = document.querySelector(".container");
	for (let i = 0; i < numCells; i++) {
		for (let j = 0; j < numCells; j++) {
			const newCell = document.createElement("div");
			newCell.style.width = String(980 / numCells) + "%";
			newCell.style.height = String(980 / numCells) + "%";
			// newCell.style.width = String(Math.floor(980 / numCells)) + "px";
			// newCell.style.height = String(Math.floor(980 / numCells)) + "px";
			// console.log(Math.floor(980 / numCells));
			// newCell.style.height = Math.floor(980 / numCells);
			container.appendChild(newCell);
		}
	}
}

displayGrid(16);
