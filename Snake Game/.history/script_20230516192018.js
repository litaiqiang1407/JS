const playBoard = document.querySelector(".play-board");

let foodX = 15;
let foodY = 15;

const 

function initGame() {
  const htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

initGame();
