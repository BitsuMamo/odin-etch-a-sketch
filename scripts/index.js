const grid = document.getElementById("grid");
const colorSelector = document.getElementById("color-input");
const clearBtn = document.getElementById("clear-btn");
const gridSize = document.getElementById("grid-size")

const defaultColor = "#FFE1EA";

let ROW = gridSize.value;
let COL = gridSize.value;


let color = 'black'

let SIDE = grid.clientWidth / ROW;
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


function createGrid(side) {
  let i = ROW * COL;
  while (i != 0) {
    createGridItem(side);
    i--;
  }
}

createGrid(SIDE);

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


gridSize.addEventListener("change", () => {
  ROW = gridSize.value;
  COL = gridSize.value;

  SIDE = grid.clientWidth / ROW;

  grid.innerHTML = "";

  createGrid(SIDE)

})
