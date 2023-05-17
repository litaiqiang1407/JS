const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const hightScoreElement = document.querySelector(".hight-score");
const controlsElements = document.querySelectorAll(".controls i");

let foodX;
let foodY;

let snakeX = 15;
let snakeY = 15;

let velocityX = 0;
let velocityY = 0;

let bodySnake = [];

let score = 0;
let hightScore = localStorage.getItem("hight-score") || 0;
hightScoreElement.innerText = `Hight score: ${hightScore}`;

let setIntervalId;
let gameOver = false;

const controlDirectionSnake = (e) => {
  if (e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
};

const changePositionFood = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game Over !!!!!!!!!!");
  location.reload();
};

// controlsElements.forEach((key) => {
//   controlDirectionSnake({ key: key.dataset.key });
// });

function initGame() {
  if (gameOver) return handleGameOver();

  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (snakeX === foodX && snakeY === foodY) {
    changePositionFood();
    bodySnake.push([foodX, foodY]);
    score++;
    hightScore = score > hightScore ? score : hightScore;
    localStorage.setItem("hight-score", hightScore);
    scoreElement.innerText = `Score: ${score}`;
  }

  for (let i = bodySnake.length - 1; i > 0; i--) {
    bodySnake[i] = bodySnake[i - 1];
  }

  bodySnake[0] = [snakeX, snakeY];
  snakeX += velocityX;
  snakeY += velocityY;

  if (snakeX > 30 || snakeX < 1 || snakeY < 1 || snakeY > 30) {
    gameOver = true;
  }

  for (let i = 0; i < bodySnake.length; i++) {
    htmlMarkup += `<div class="snake" style="grid-area: ${bodySnake[i][1]} / ${bodySnake[i][0]}"></div>`;

    if (
      i !== 0 &&
      bodySnake[0][0] === bodySnake[i][0] &&
      bodySnake[0][1] === bodySnake[i][1]
    ) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = htmlMarkup;
}

changePositionFood();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", controlDirectionSnake);
