const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 15;
let snakeY = 15;
let velocityX = 0;
let velocityY = 0;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const changeDirection = (e) => {
  console.log(e);
};

function initGame() {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
initGame();
document.addEventListener("keydown", changeDirection);
