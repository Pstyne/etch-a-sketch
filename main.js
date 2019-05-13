const gridContainer = document.querySelector(".grid-container");
const cellSize = document.getElementById("cell-size").value;

const createCell = () => {
  const cell = document.createElement("div");
  cell.setAttribute("class", "cell");
  gridContainer.appendChild(cell);
  cell.onmouseover = () => {
    cell.style.backgroundColor = "#000000";
  }
};

const rainbow = () => {
  const cells = Array.from(gridContainer.children);
  cells.forEach( cell => {
    cell.onmouseover = () => {
      const randomRed = Math.floor(Math.random() * 255);
      const randomBlue = Math.floor(Math.random() * 255);
      const randomGreen = Math.floor(Math.random() * 255);
      const cellColor = cell.style.backgroundColor;
      const number = cellColor.split(/\D/).filter( i => i !== "");
      cell.style.backgroundColor = cellColor === "" ? 
      `rgb(${randomRed}, ${randomBlue}, ${randomGreen})` : 
      `rgb(${parseInt(number[0]) - 20}, ${parseInt(number[1]) - 20}, ${parseInt(number[2]) - 20})`;
    };
  });
}

const black = () => {
  const cells = Array.from(gridContainer.children);
  cells.forEach( cell => cell.onmouseover = () => cell.style.backgroundColor = "#000000");
}

const eraser = () => {
  const cells = Array.from(gridContainer.children);
  cells.forEach( cell => cell.onmouseover = () => cell.style.backgroundColor = "");
}

const removeGrid = () => {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  };
};

const clearGrid = () => {
  const cells = Array.from(gridContainer.children);
  cells.forEach( cell => cell.style.backgroundColor = "");
};

const createGrid = size => {
  const width = gridContainer.clientWidth / size - .008;
  const height = gridContainer.clientHeight / size - .008;
  for(let i = 0; i < size * size; i++) {
    createCell(); 
  };
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.height = `${height}px`;
    cell.style.width = `${width}px`;
  });
}

const changeGrid = size => {
  if(size > 0 && size <= 100) {
    removeGrid();
    createGrid(size);
  } else {
    alert("Choose between 1 and 100");
  }
};

createGrid(cellSize);