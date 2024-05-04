const $generatorContainer = document.querySelector(".generator-container");
const $warning = document.querySelector(".warning");
const $copyBtn = document.querySelector("#copy-btn");
const $generateBtn = document.querySelector("#generate-btn");
const $checkbox = document.querySelector(".check-box");
const $longlock = document.querySelector("#longlock");
const $shortlock = document.querySelector("#shortlock");

// input 태그 모음
const $password = document.querySelector("#password"); // 읽기 전용
const $passwordLength = document.querySelector("#password-length");
const $pNumbers = document.querySelector("#p-numbers");
const $pSmallLetters = document.querySelector("#p-small-letters");
const $pCapitalLetters = document.querySelector("#p-capital-letters");
const $pSymbols = document.querySelector("#p-symbols");

// 비밀번호에 들어갈 문자열 모음
const numbers = "0123456789";
const smallLetters = "abcdefghijklmnopqrstuvwxy";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "@!#$&%";

// 버튼에 이벤트 적용
$generateBtn.addEventListener("click", generatePassword);
$copyBtn.addEventListener("click", copyPassword);

// 패스워드 생성
function generatePassword() {
  const passwordLength = parseInt($passwordLength.value);
  let generatedPassword = "";

  // 선택된 문자열들을 저장할 배열
  let selectedChars = [];

  // 각 옵션이 체크되었을 때 해당 문자열을 배열에 추가
  if ($pNumbers.checked) selectedChars.push(numbers);
  if ($pSmallLetters.checked) selectedChars.push(smallLetters);
  if ($pCapitalLetters.checked) selectedChars.push(capitalLetters);
  if ($pSymbols.checked) selectedChars.push(symbols);

  // 적어도 하나의 문자열이 선택되었는지 확인
  if (selectedChars.length === 0) {
    $password.value = "";
    lockChange();
    return;
  }

  // 각 옵션이 체크되었을 때 선택된 문자열 중 하나를 패스워드에 무조건 포함
  for (let i = 0; i < selectedChars.length; i++) {
    const randomCharIndex = Math.floor(Math.random() * selectedChars[i].length);
    generatedPassword += selectedChars[i][randomCharIndex];
  }

  // 나머지 패스워드 길이만큼 랜덤하게 문자열 선택하여 패스워드 생성
  for (let i = selectedChars.length; i < passwordLength; i++) {
    // 선택된 문자열 중 랜덤하게 하나 선택
    const randomSelectedCharIndex = Math.floor(
      Math.random() * selectedChars.length
    );
    const selectedCharString = selectedChars[randomSelectedCharIndex];

    // 선택된 문자열에서 랜덤하게 하나 선택하여 패스워드에 추가
    const randomChar = selectedCharString.charAt(
      Math.floor(Math.random() * selectedCharString.length)
    );
    generatedPassword += randomChar;
  }

  // 생성된 패스워드를 입력란에 표시
  $password.value = generatedPassword;

  lockChange();
}

// 클립보드에 복사
async function copyPassword() {
  const copiedPassword = $password.value;

  try {
    await navigator.clipboard.writeText(copiedPassword);
    console.log("패스워드가 클립보드에 복사되었습니다: " + copiedPassword);
    alert('Password copied successfully!');
  } catch (err) {
    console.error("클립보드에 패스워드 복사 실패: ", err);
  }
}

// 자물쇠 변화
function lockChange() {
  if ($password.value) {
    $shortlock.style.display = "none";
    $longlock.style.display = "block";
  }

  if (!$password.value) {
    $shortlock.style.display = "block";
    $longlock.style.display = "none";
  }
}
