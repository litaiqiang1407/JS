const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const hightScoreElement = document.querySelector(".hight-score");

let gameOver = false;

let foodX, foodY;

let snakeX = 15;
let snakeY = 15;

let snakeBody = [];

let velocityX = 0;
let velocityY = 0;

let setIntervalId;

let score = 0;
let hightScore = localStorage.getItem("hight-score") || 0;
hightScoreElement.innerText = `Hight Score: ${hightScore}`;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const changeDirection = (e) => {
  if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  }
};

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game Over !!!!!!!!");
  location.reload();
};

function initGame() {
  if (gameOver) return handleGameOver();
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]);
    score++;

    hightScore = score >= hightScore ? score : hightScore;
    localStorage.setItem("hight-score", hightScore);

    scoreElement.innerText = `Score: ${score}`;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY];

  snakeX += velocityX;
  snakeY += velocityY;

  if (snakeX > 30 || snakeX <= 0 || snakeY > 30 || snakeY <= 0) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if (
      i !== 0 &&
      snakeBody[0][0] === snakeBody[i][0] &&
      snakeBody[0][1] === snakeBody[i][1]
    ) {
      gameOver = true;
    }
  }

  playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
