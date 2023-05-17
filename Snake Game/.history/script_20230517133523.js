const playBoard = document.querySelector(".play-board");

let foodX;
let foodY;

let snakeX = 15;
let snakeY = 15;

let velocityX = 0;
let velocityY = 0;

const controlDirectionSnake = (e) => {
  if (e.key === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowUp" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowDown" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  }
};

const changePositionFood = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

function initGame() {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  snakeX += velocityX;
  snakeY += velocityY;

  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}
controlDirectionSnake();

changePositionFood();
initGame();
