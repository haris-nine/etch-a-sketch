let n = 16

function setNewGrid() {
	n = prompt("How many squares per side?", 16)
	if (n > 0 && n < 101) {
		container.innerHTML = ''
		gridMaker()
		etching()
	}
	else {
		alert("Choose a number between 1 and 100!")
	}
}

document.querySelector(".btn").onclick = function() {
	setNewGrid()
}

const container = document.querySelector("#container");

function gridMaker() {
	for (let i = 0; i < n; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
			for (let x = 0; x < n; x++) {
				let grid = document.createElement("div")
				grid.classList.add("grid")
				row.appendChild(grid);
			};
		container.appendChild(row);
	}
}


gridMaker()

function etching () {
	let grids = document.querySelectorAll(".grid")

	grids.forEach(el => el.addEventListener("click", becomeEtched));

	function becomeEtched() {
		this.classList.toggle("etched");
	}
}

etching()