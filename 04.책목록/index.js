const $title = document.getElementById("title");
const $author = document.getElementById("author");
const $date = document.getElementById("date");
const $description = document.getElementById("description");
const $table = document.querySelector(".table");
const $tableHead = document.querySelector("thead");
const $tableBody = document.querySelector("tbody");
const $tbody = document.querySelector("tbody");
const $rows = document.querySelectorAll("tbody tr");

const $addBtn = document.querySelector("#add-btn");
const $deleteBtn = document.querySelector("#delete-btn");
const $editBtn = document.querySelector("#edit-btn");
const $saveBtn = document.querySelector("#save-btn");

const $downloadBtn = document.querySelector("#download-btn");
const $resetBtn = document.querySelector("#reset-btn");
const $bookmarkBtn = document.querySelector("#bookmark-btn");

// 클릭 이벤트
$resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetList();
});

$bookmarkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveToLocalStorage();
});

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

$table.addEventListener("click", (e) => {
  if (e.target.id === "edit-btn") {
    e.preventDefault();
    editBook(e);
  }
});

$table.addEventListener("click", (e) => {
  if (e.target.id === "save-btn") {
    e.preventDefault();
    saveBook(e);
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
  <button class="material-symbols-outlined" id="save-btn">save</button>
  <button class="material-symbols-outlined" id="delete-btn">delete</button></td>
`;

  $tableBody.appendChild(row);

  $description.style.visibility = "visible";
  $description.textContent = "책이 추가되었습니다.";
  $description.style.backgroundColor = "green";

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
  const cells = row.querySelectorAll("td");

  const title = cells[0].innerText;
  const author = cells[1].innerText;
  const date = cells[2].innerText;

  $title.value = title;
  $author.value = author;
  $date.value = date;
}

// 책 목록 개별 편집 후 저장
function saveBook(e) {
  const row = e.target.closest("tr");
  const cells = row.querySelectorAll("td");

  cells[0].innerText = $title.value;
  cells[1].innerText = $author.value;
  cells[2].innerText = $date.value;

  $title.value = "";
  $author.value = "";
  $date.value = "";
}

// HTML의 표를 CSV 파일 생성
class ConvertToCSV {
  constructor() {
    $downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.getCSV("bookList.csv");
    });
  }

  downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    csvFile = new Blob(["\uFEFF" + csv], { type: "text/csv; charset=UTF-8" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  getCSV(filename) {
    const csv = [];
    const rows = document.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++) {
      const row = [];
      const cols = rows[i].querySelectorAll("th, td");

      for (let j = 0; j < cols.length - 1; j++) {
        row.push(cols[j].innerText);
      }

      csv.push(row.join(","));
    }

    this.downloadCSV(csv.join("\n"), filename);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  new ConvertToCSV();
});

// 전체 리스트 초기화
function resetList() {
  const $tbody = document.querySelector("tbody");

  $tbody.innerHTML = "";
  localStorage.clear();

  $description.style.visibility = "visible";
  $description.textContent = "전체 리스트가 초기화되었습니다.";
  $description.style.backgroundColor = "blue";

  closeDescription();
}

// 로컬 스토리지에 임시저장
function saveToLocalStorage() {
  const $rows = document.querySelectorAll("tbody tr");

  const books = [];

  $rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const book = {
      title: cells[0].innerText,
      author: cells[1].innerText,
      date: cells[2].innerText,
    };
    books.push(book);
  });

  localStorage.setItem("bookList", JSON.stringify(books));

  $description.style.visibility = "visible";
  $description.textContent = "책 목록이 임시 저장되었습니다.";
  $description.style.backgroundColor = "blue";

  closeDescription();
}

// 로컬 스토리지에 저장된 책 목록 불러오기
function loadFromLocalStorage() {
  const storedBooks = localStorage.getItem("bookList");
  if (storedBooks) {
    const books = JSON.parse(storedBooks);
    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.date}</td>
        <td style="display: flex; overflow: hidden;">
          <button class="material-symbols-outlined" id="edit-btn">edit</button>
          <button class="material-symbols-outlined" id="save-btn">save</button>
          <button class="material-symbols-outlined" id="delete-btn">delete</button>
        </td>`;
      $tableBody.appendChild(row);
    });
  }
}

// 페이지 로드될 때 로컬 스토리지에서 책 목록 불러오기
document.addEventListener("DOMContentLoaded", (e) => {
  loadFromLocalStorage();
});

// 안내 문구는 3초 후에 자동 삭제
function closeDescription() {
  setTimeout(() => {
    if (($description.style.visibility = "visible")) {
      $description.style.visibility = "hidden";
    }
  }, 3000);
}
