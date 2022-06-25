const grid = document.getElementById("grid");
const colorSelector = document.getElementById("color-input");
const clearBtn = document.getElementById("clear-btn");

const defaultColor = "#FFE1EA";

const ROW = 30;
const COL = 30
let color = 'black'

const SIDE = grid.clientWidth / ROW;
console.log(SIDE)


function createGridItem(sideLength) {
  const gridItem = document.createElement('div');

  gridItem.classList.add("grid-item");

  gridItem.style.width = `${sideLength}px`;
  gridItem.style.height = `${sideLength}px`;

  grid.append(gridItem);


  gridItem.addEventListener('mouseover', () => {
    gridItem.style.backgroundColor = color;
  })
}


function createGrid() {
  let i = ROW * COL;
  while (i != 0) {
    createGridItem(SIDE);
    i--;
  }
}

createGrid();

const gridItems = document.getElementsByClassName("grid-item");
console.log(gridItems)

colorSelector.addEventListener("change", () => {
  color = colorSelector.value;
})

clearBtn.addEventListener("click", () => {
  for(let i = 0; i < gridItems.length; i++){
    gridItems[i].style.backgroundColor = defaultColor;
  }
})



