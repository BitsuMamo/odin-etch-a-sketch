const grid = document.getElementById("grid");

const ROW = 16;
const COL = 16;

const SIDE = grid.clientWidth / ROW;
console.log(SIDE)

function createGridItem(sideLength) {
  const gridItem = document.createElement('div');

  gridItem.classList.add("grid-item");

  gridItem.style.width = `${sideLength}px`;
  gridItem.style.height = `${sideLength}px`;

  grid.append(gridItem);
}

function createGrid() {
  let i = ROW * COL;
  while (i != 0) {
    createGridItem(SIDE);
    i--;
  }
}

createGrid();


