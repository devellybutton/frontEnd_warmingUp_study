import oxQuizData from "./data/data1.js";
import mathQuizData from "./data/data2.js";
import wordQuizData from "./data/data3.js";

// 메인 화면
const $startOx = document.getElementById("start-ox");
const $startMath = document.getElementById("start-math");
const $startWord = document.getElementById("start-word");
const $startCross = document.getElementById("start-cross");
const $startQuizContainer = document.querySelector(".startQuizContainer");
const $oxQuiz = document.querySelector(".oxQuiz");
const $wordQuiz = document.querySelector(".wordQuiz");
const $mathQuiz = document.querySelector(".mathQuiz");

const $firstTimeButton = document.getElementById("firstTimeButton");
const $correctCount = document.getElementById("correctCount");

const $oBtn = document.getElementById("oBtn");
const $xBtn = document.getElementById("xBtn");
const $oxExplanation = document.getElementById("oxExplanation");
const $oxNext = document.getElementById("oxNext");
const $oxNumbers = document.getElementById("oxNumbers");

// 화면 초기화
function reset() {
  $startQuizContainer.style.display = "block";
  $oxQuiz.style.display = "none";
  $wordQuiz.style.display = "none";
  $mathQuiz.style.display = "none";
}

// '처음으로' 버튼 클릭
$firstTimeButton.addEventListener("click", (e) => {
  e.preventDefault();
  reset();
});

// OX 퀴즈 시작
$startOx.addEventListener("click", (e) => {
  e.preventDefault();
  $startQuizContainer.style.display = "none";
  $oxQuiz.style.display = "flex";

  // 문항수 랜덤 생성
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 데이터 불러와서 무작위로 넣기
  function selectRandomQuestions(data, count) {
    const shuffledData = shuffleArray([...data]);
    console.log(shuffledData);
    return shuffledData.slice(0, count);
  }

  // 화면에 문항 렌더링
  function renderQuestion(question) {
    const $oxQuestion = document.getElementById("oxQuestion");
    $oxQuestion.innerText = question.question;
  }

  function handleUserInput(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  // O 버튼을 눌렀을 경우
  $oBtn.addEventListener("click", function () {
    const userAnswer = "o";
    const correctAnswer = currentQuestion.answer;
    const isCorrect = handleUserInput(userAnswer, correctAnswer);
    console.log(isCorrect);
    if (isCorrect) {
      score++;
      $correctCount.innerText = score;
      console.log("O버튼 맞음");
      $oBtn.classList.add("correct-answer");
    } else {
      $oBtn.classList.add("incorrect-answer");
      console.log("O버튼 틀림");
    }
    $oxExplanation.innerText = currentQuestion.explanation;
    moveToNextQuestion();
  });

  // X 버튼을 눌렀을 경우
  $xBtn.addEventListener("click", function (e) {
    const userAnswer = "x";
    const correctAnswer = currentQuestion.answer;
    const isCorrect = handleUserInput(userAnswer, correctAnswer);
    if (isCorrect) {
      score++;
      $correctCount.innerText = score;
      console.log("x버튼 맞음");
      $xBtn.classList.add("correct-answer");
    } else {
      console.log("x버튼 틀림");
      $xBtn.classList.add("incorrect-answer");
    }
    $oxExplanation.innerHTML = currentQuestion.explanation;
    moveToNextQuestion();
  });

  // 다음 버튼을 눌렀을 경우
  $oxNext.addEventListener("click", function () {
    moveToNextQuestion();
  });

  // 다음 문제로 넘어가기
  function moveToNextQuestion() {
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < selectedQuestions.length) {
        const nextQuestion = selectedQuestions[currentQuestionIndex];
        console.log(nextQuestion);
        renderQuestion(nextQuestion);

        // 버튼 색상 초기화
        $oBtn.classList.remove("correct-answer", "incorrect-answer");
        $xBtn.classList.remove("correct-answer", "incorrect-answer");

        // 해설 내용 초기화
        $oxExplanation.innerText = "";
      } else {
        reset();
      }
    }, 3000);
  }

  const selectedQuestions = selectRandomQuestions(oxQuizData, 10);

  let currentQuestionIndex = 0;
  let score = 0;

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  renderQuestion(currentQuestion);
});

// 초성 퀴즈 시작
$startWord.addEventListener("click", (e) => {
  e.preventDefault();
  $startQuizContainer.style.display = "none";
});

// 사칙연산 퀴즈 시작
$startMath.addEventListener("click", (e) => {
  e.preventDefault();
  $startQuizContainer.style.display = "none";
});

// 가로세로 낱말퍼즐 시작
$startCross.addEventListener("click", (e) => {
  e.preventDefault();
  alert("준비중입니다!");
});
