const playBoard = document.querySelector(".play-board");

let foodX;
let foodY;

let snakeX = 15;
let snakeY = 15;

let velocityX = 0;
let velocityY = 0;

let bodySnake = [];

const controlDirectionSnake = (e) => {
  if (e.key === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowUp" && velocityY !== -1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY !== 1) {
    velocityX = 0;
    velocityY = 1;
  }
  initGame();
};

const changePositionFood = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

function initGame() {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  snakeX += velocityX;
  snakeY += velocityY;

  if (snakeX === foodX && snakeY === foodY) {
    changePositionFood();
    bodySnake.push([foodX, foodY]);
  }

  for (let i = 0; i < bodySnake.length; i++) {
    htmlMarkup += `<div class="snake" style="grid-area: ${bodySnake[i][1]} / ${bodySnake[i][0]}"></div>`;
  }
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
}

changePositionFood();
setInterval(initGame, 125);
document.addEventListener("keydown", controlDirectionSnake);
