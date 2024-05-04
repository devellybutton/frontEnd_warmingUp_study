const $title = document.getElementById("title");
const $author = document.getElementById("author");
const $date = document.getElementById("date");
const $description = document.getElementById("description");
const $tableHead = document.querySelector("thead");
const $addBtn = document.querySelector("#add-btn");
const $deleteBtn = document.querySelector("#delete-btn");
const $editBtn = document.querySelector("#edit-btn");
const $table = document.querySelector(".table");

// 클릭 이벤트
$addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
});

$table.addEventListener("click", (e) => {
  if (e.target.id === "delete-btn") {
    e.preventDefault();
    removeBook(e);
  }
});

// 책 목록 개별 등록
function addBook() {
  const row = document.createElement("tr");

  if (!$title.value || !$author.value || !$date.value) {
    alert("모든 내용을 입력해주세요.");
    return;
  }

  row.innerHTML = `
  <td>${$title.value}</td>
  <td>${$author.value}</td>
  <td>${$date.value}</td>
  <td style="display: flex; overflow: hidden;">
  <button class="material-symbols-outlined" id="edit-btn">edit</button>
  <button class="material-symbols-outlined" id="delete-btn">save</button></td>
  <button class="material-symbols-outlined" id="delete-btn">delete</button></td>
`;

  $tableHead.appendChild(row);

  $description.style.visibility = "visible";
  $description.textContent = "책이 추가되었습니다.";

  closeDescription();
}

// 책 목록 개별 삭제
function removeBook(e) {
  const row = e.target.closest("tr");
  if (row) row.remove();

  $description.style.visibility = "visible";
  $description.textContent = "책이 삭제되었습니다.";
  $description.style.backgroundColor = "red";

  closeDescription();
}

// 책 목록 개별 편집
function editBook(e) {
  const row = e.target.closest("tr");
  $title.value
  $author.value
  $date.value
}

// 안내 문구는 3초 후에 자동 삭제
function closeDescription() {
  setTimeout(() => {
    if (($description.style.visibility = "visible")) {
      $description.style.visibility = "hidden";
    }
  }, 3000);
}
