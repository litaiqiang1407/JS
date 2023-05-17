const playBoard = document.querySelector(".play-board");

let foodX = 13;
let foodY = 10;

function initGame() {
  const htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

initGame();
