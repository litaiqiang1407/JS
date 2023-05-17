const playBoard = document.querySelector(".play-board");

let foodX;
let foodY;

const changePositionFood = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

function initGame() {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}
changePositionFood();
initGame();
