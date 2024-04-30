// DOM 요소 정의
const $playerScore = document.getElementById("player-score");
const $computerScore = document.getElementById("computer-score");
const $currentCount = document.getElementById("current-count");
const $rockBtn = document.getElementById("rock-circle");
const $scissorsBtn = document.getElementById("scissors-circle");
const $paperBtn = document.getElementById("paper-circle");
const $circleContainer = document.getElementById("circle-container");
const $result = document.getElementById("result");
const $playerSelection = document.getElementById("player-selection");
const $computerSelection = document.getElementById("computer-selection");
const $retry = document.getElementById("retry");

// 변수 정의
let count = 10; // 게임 실행 횟수, 10번 넘으면 게임 종료됨.
let playerScore = 0; // 플레이어의 점수
let computerScore = 0; // 컴퓨터의 점수
const computerSelections = ["rock", "scissors", "paper"];
const playerSelections = [$rockBtn, $scissorsBtn, $paperBtn];

// 게임을 진행하는 함수
const startGame = () => {
  playerSelections.forEach((button) => {
    button.addEventListener("click", () => {
      firstClick();
      const playerSelection = button.id.split("-")[0];
      const computerSelection = getComputerSelection();
      //   showSelection(playerSelection, computerSelection);
      count--;
      $currentCount.innerText = count;
      console.log(count);
      determineWinner(playerSelection, computerSelection);
      updateScore();
      if (count == 0) endGame();
    });
  });
};

// 컴퓨터가 랜덤으로 선택을 하는 함수
const getComputerSelection = () => {
  const index = Math.trunc(Math.random() * 3);
  return computerSelections[index];
};

// 플레이어의 선택과 컴퓨터의 선택이 출력되는 함수
// const showSelection = (playerSelection, computerSelection) => {
//     $playerSelection.appendChild =
//     $computerSelection.appendChild =

// 승부를 결정하는 함수
const determineWinner = (computerSelection, playerSelection) => {
  if (computerSelection === playerSelection) {
    $result.innerText = "Tie!";
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    $result.innerText = "You Win!";
    playerScore++;
  } else {
    $result.innerText = "Computer Wins!";
    computerScore++;
  }
};

// 점수판의 숫자를 업데이트하는 함수
const updateScore = () => {
  $playerScore.innerText = playerScore;
  $computerScore.innerText = computerScore;
};

// 게임 종료 후 게임 결과와 RETRY 버튼이 나오는 함수
const endGame = () => {
  let gameResult;
  if (playerScore === computerScore) {
    gameResult = "Tie!";
  } else if (playerScore > computerScore) {
    gameResult = "You Win!";
  } else {
    gameResult = "Me Win!";
  }
  // <div class="result" id="result">YOU WIN!</div>
  const $gameResult = document.createElement("div");
  $gameResult.innerText = gameResult;
  $retry.style.display = "block";
};

// 게임 시작
startGame();
