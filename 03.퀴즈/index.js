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
const $oxNumbers = document.getElementById("oxNumbers");

// 화면 초기화
function goToMain() {
  $startQuizContainer.style.display = "block";
  $oxQuiz.style.display = "none";
  $wordQuiz.style.display = "none";
  $mathQuiz.style.display = "none";
  $correctCount.style.visibility = "hidden";
  $correctCount.innerText = "0";
  $oxNumbers.innerText = "1 / 10";
}

// '처음으로' 버튼 동작
$firstTimeButton.addEventListener("click", goToMain);

// OX 퀴즈
class OXQuiz {
  constructor(data, count) {
    this.questions = this.selectRandomQuestions(data, count);
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.$oxQuestion = document.getElementById("oxQuestion");
    this.$oBtn = document.getElementById("oBtn");
    this.$xBtn = document.getElementById("xBtn");
    this.$oxExplanation = document.getElementById("oxExplanation");
    this.$oxNext = document.getElementById("oxNext");
    this.$correctCount = document.getElementById("correctCount");
    this.$correctCount.style.visibility = "visible";
    this.$oxNumbers = document.getElementById("oxNumbers");
    this.$oxQuizBtn = document.querySelector("oxQuizBtn");
    this.renderQuestion(this.questions[this.currentQuestionIndex]);
    this.bindEvents();
  }

  // 문항수 랜덤 생성
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 랜덤으로 문제 생성해서 넣기
  selectRandomQuestions(data, count) {
    const shuffledData = this.shuffleArray([...data]);
    return shuffledData.slice(0, count);
  }

  // 화면에 문항 렌더링
  renderQuestion(question) {
    this.$oxQuestion.innerText = question.question;
  }

  // 정답 일치여부 판단
  handleUserInput(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
  }

  // '다음' 버튼 클릭시 다음 문제로 넘어감
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestionIndex++;
      $oxNumbers.innerText = `${this.currentQuestionIndex + 1} / ${
        this.questions.length
      }`;
      this.renderQuestion(this.questions[this.currentQuestionIndex]);
      this.$oBtn.classList.remove("correct-answer", "incorrect-answer");
      this.$xBtn.classList.remove("correct-answer", "incorrect-answer");
      this.$oxExplanation.innerText = "";
    } else {
      this.reset();
    }
  }

  // OX 버튼 클릭시 정답 처리
  handleOXButtonClick(answer) {
    this.$oBtn.disabled = true;
    this.$xBtn.disabled = true;
    const userAnswer = answer.toUpperCase();
    const correctAnswer =
      this.questions[this.currentQuestionIndex].answer.toUpperCase();
    const isCorrect = this.handleUserInput(userAnswer, correctAnswer);
    const $button = answer === "o" ? this.$oBtn : this.$xBtn;

    $button.classList.add(isCorrect ? "correct-answer" : "incorrect-answer");
    this.$oxExplanation.innerText =
      this.questions[this.currentQuestionIndex].explanation;

    // 해설 읽는 시간을 고려하여 2초 후에 넘어가도록 함.
    setTimeout(() => {
      this.$oBtn.disabled = false;
      this.$xBtn.disabled = false;
      if (isCorrect) {
        this.score++;
        this.$correctCount.innerText = this.score;
      }

      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestionIndex++;
        // 10회차에서 11회차로 넘어가기 전 종료
        if (this.currentQuestionIndex >= 10) {
          this.reset();
        }
        $oxNumbers.innerText = `${this.currentQuestionIndex + 1} / ${
          this.questions.length
        }`;
        this.renderQuestion(this.questions[this.currentQuestionIndex]);
        this.$oBtn.classList.remove("correct-answer", "incorrect-answer");
        this.$xBtn.classList.remove("correct-answer", "incorrect-answer");
        this.$oxExplanation.innerText = "";
      } else {
        this.reset();
      }
    }, 2000);
  }

  // OX 버튼의 이벤트 처리
  bindEvents() {
    this.$oBtn.addEventListener("click", () => this.handleOXButtonClick("o"));
    this.$xBtn.addEventListener("click", () => this.handleOXButtonClick("x"));
    this.$oxNext.addEventListener("click", () => this.nextQuestion());
  }

  // 초기화
  reset() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.$oxExplanation.innerText = "";
    this.$correctCount.innerText = "0";
    this.$oBtn.classList.remove("correct-answer", "incorrect-answer");
    this.$xBtn.classList.remove("correct-answer", "incorrect-answer");
    goToMain();
  }
}

// OX 퀴즈 시작 버튼 클릭 시 인스턴스 생성
$startOx.addEventListener("click", (e) => {
  e.preventDefault();
  $startQuizContainer.style.display = "none";
  $oxQuiz.style.display = "flex";
  const oxQuiz = new OXQuiz(oxQuizData, 10);
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
