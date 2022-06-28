const grid = document.getElementById("grid");
const colorSelector = document.getElementById("color-input");
const bgColorSelector = document.getElementById("bg-color-input");
const clearBtn = document.getElementById("clear-btn");
const gridSize = document.getElementById("grid-size")

colorSelector.value = "black";
bgColorSelector.value = "#FFE1EA";

let defaultColor = "#FFE1EA";

let ROW = gridSize.value;
let COL = gridSize.value;


let color = 'black'

let SIDE = grid.clientWidth / ROW;
console.log(SIDE)

// A utlily to check if the mouse is clicked or not
// used to check if we are dragging instead of hovering
var mouseDown = 0;
document.body.onmousedown = function(){
  mouseDown = 1;
}
document.body.onmouseup = function(){
  mouseDown = 0;
}


function createGridItem(sideLength) {
  const gridItem = document.createElement('div');

  gridItem.classList.add("grid-item");

  gridItem.style.width = `${sideLength}px`;
  gridItem.style.height = `${sideLength}px`;

  grid.append(gridItem);


  gridItem.addEventListener('mouseover', () => {
    if(mouseDown == 1){
      gridItem.style.backgroundColor = color;
    }
  })
}


function createGrid(side) {
  let i = ROW * COL;
  while (i != 0) {
    createGridItem(side);
    i--;
  }
}

function attachEventListeners() {
  colorSelector.addEventListener("change", () => {
    color = colorSelector.value;
  })

  bgColorSelector.addEventListener("change", () => {
    defaultColor = bgColorSelector.value;
    clearBtn.click();
  })

  clearBtn.addEventListener("click", () => {
    for (let i = 0; i < gridItems.length; i++) {
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
}

createGrid(SIDE);

const gridItems = document.getElementsByClassName("grid-item");

attachEventListeners();
