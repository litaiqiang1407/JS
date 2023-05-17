const playBoard = document.querySelector(".play-board");

let foodX = 15;
let foodY = 15;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random * 30) + 1;
  foodY = Math.floor(Math.random * 30) + 1;
};

function initGame() {
  const htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
initGame();
