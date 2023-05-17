const playBoard = document.querySelector(".play-board");

let foodX;
let foodY;

function initGame() {
  let htmlMarkup = `<div class="food" grid-area="${foodY} / ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

initGame();
