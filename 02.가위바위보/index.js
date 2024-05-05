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
const $modalOverlay = document.getElementById("modal-overlay");
const $modalResult = document.getElementById("modal-result");

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
      const playerSelection = button.id.split("-")[0];
      const computerSelection = getComputerSelection();
      showSelection(playerSelection, computerSelection);

      // 버튼이 클릭되면 0.5초 동안 재클릭되는 것 방지
      button.disabled = true;
      setTimeout(() => {
        button.disabled = false;
      }, 500);

      count--;
      $currentCount.innerText = count;

      determineWinner(
        computerSelection,
        playerSelection,
        playerScore,
        computerScore
      );
      updateScore(playerScore, computerScore);

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
const showSelection = (playerSelection, computerSelection) => {
  $playerSelection.innerText = playerSelection;
  $playerSelection.style.visibility = "visible";
  $computerSelection.innerText = computerSelection;
  $computerSelection.style.visibility = "visible";
};

// 승부를 결정하는 함수
const determineWinner = (computerSelection, playerSelection) => {
  if (computerSelection === playerSelection) {
    $result.style.visibility = "visible";
    $result.innerText = "Tie!";
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    $result.style.visibility = "visible";
    $result.innerText = "You Win!";
    playerScore++;
  } else {
    $result.style.visibility = "visible";
    $result.innerText = "Me Win!";
    computerScore++;
  }
};

// 점수판의 숫자를 업데이트하는 함수
const updateScore = (playerScore, computerScore) => {
  $playerScore.innerText = playerScore;
  $computerScore.innerText = computerScore;
};

// 최종 점수 계산 후 화면에 렌더링
const totalScore = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    $modalResult.textContent = "You WIN!";
  } else if (playerScore < computerScore) {
    $modalResult.textContent = "Me WIN!";
  } else {
    $modalResult.textContent = "TIE!";
  }
};

// 게임 종료 후 게임 결과와 RETRY 버튼이 나오는 함수
const endGame = () => {
  totalScore(playerScore, computerScore);

  if (count === 0) {
    $retry.style.display = "block";
    $modalOverlay.style.display = "block";
    $modalResult.style.display = "block";
  }

  count = 10;
  $currentCount.innerText = count;

  $retry.addEventListener("click", restartGame);
};

// 게임 재시작
const restartGame = () => {
  // 모달창 제거
  $retry.style.display = "none";
  $modalOverlay.style.display = "none";
  $modalResult.style.display = "none";

  // 플레이어 점수와 컴퓨터 점수 초기화
  playerScore = 0;
  computerScore = 0;
  updateScore(playerScore, computerScore);

  // 점수판 초기화
  $playerSelection.innerText = "";
  $computerSelection.innerText = "";
  $result.innerText = "";
};

// 게임 시작
startGame();
