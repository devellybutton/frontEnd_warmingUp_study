# 04. 책 목록 

![Image](https://github.com/user-attachments/assets/18040824-7690-471a-b7fe-7d124a6d12e0)

-----

## 기능
- '책 이름', '책 저자', '읽은 날짜'를 입력하고 버튼을 누르면 표 아래에 하나씩 등록
- 각 항목별로 수정, 삭제 가능 <i>(연필: 수정, 디스켓: 수정완료)</i>
- CSV 파일로 저장 가능 <i>(화면 맨 오른쪽 첫 번째 아이콘)</i>
- 리스트 내 전체 내용 삭제 가능 <i>(화면 맨 오른쪽 두 번째 아이콘)</i>
- LocalStorage에 임시저장하여 페이지 로딩시 데이터 로드 <i>(화면 맨 오른쪽 세 번째 아이콘)</i>

## 시연
- '책 이름', '책 저자', '읽은 날짜'를 입력하고 버튼을 누르면 표 아래에 하나씩 등록

    ![Image](https://github.com/user-attachments/assets/7fc43503-c6e6-4bdc-acbb-be149f1be6e8)

- 각 항목별로 수정, 삭제가 가능

    ![Image](https://github.com/user-attachments/assets/f9a08640-1c6f-4f90-8385-fbf7220e1d5a)

- LocalStorage에 임시저장하여 페이지 로딩시 데이터 로드

    ![Image](https://github.com/user-attachments/assets/ce8e137b-d2ab-4298-be80-cc10e6be43f3)

- CSV 파일로 저장 가능

    ![Image](https://github.com/user-attachments/assets/9f84a700-c90d-445b-b996-db8dbee9a5c0)

- 리스트 내 전체 내용 삭제 가능

    ![Image](https://github.com/user-attachments/assets/da6d5f7d-4c91-4e6d-8cbf-e89e59f4cb34)

## 개발 후기
- 간단한 기능 구현과 완벽한 구현 사이의 차이를 경험했음. 
- 기능 고도화 과정에서 예상치 못한 문제들로 개발 속도가 저하되었음. 
- 인터넷의 많은 소스들을 단순히 복사하는 것보다 프로젝트 상황에 맞게 적용하는 것의 중요성을 깨달았음.

## 트러블슈팅

### 1. 이벤트 위임 문제
- 버튼 클릭으로 행 삭제 시, `innerHTML` 사용으로 이벤트 리스너가 함께 삭제되는 문제가 발생함.
- 상위 요소에 이벤트 리스너를 추가하여 해결했음.

**수정 전:**
```javascript
if (deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    removeBook(e); 
  });
}

function removeBook(e) {
  const row = e.target.closest("tr");
  if (row) row.remove();
}
```

**수정 후:**
```javascript
table.addEventListener("click", (e) => {
  if (e.target.id === "delete-btn") {
    e.preventDefault();
    removeBook(e);
  }
});

function removeBook(e) {
  const row = e.target.closest("tr");
  if (row) row.remove();
}
```

### 2. 클래스 초기화 방법 수정
- 페이지 로딩 시 tbody에 내용이 없어 `ConvertToCSV` 클래스의 `getCSV` 메소드가 정상 작동하지 않았음.
- 생성자가 아닌 내부 메소드에서 tr을 찾도록 수정하여 해결했음.

### 3. CSV 파일 한글 깨짐 문제
- UTF-8 설정에도 한글이 깨지는 문제가 발생했음.
- `[csv]`를 `["\uFEFF" + csv]`로 변경하니 해결되었음.

    ```javascript
    // 수정 전
    csvFile = new Blob([csv], { type: "text/csv; charset=UTF-8" });

    // 수정 후
    csvFile = new Blob(["\uFEFF" + csv], { type: "text/csv; charset=UTF-8" });
    ```

## 참고 자료
- **이미지 출처:**
  - [다운로드 아이콘](https://www.flaticon.com/free-icon/download_9153957)
  - [리셋 아이콘](https://www.flaticon.com/free-icon/restart_6532052)
  - [북마크 아이콘](https://www.flaticon.com/free-icon/bookmark_10238285)
  
- **개발 참고 링크:**
  - [HTML 테이블을 CSV로 변환](https://beomi.github.io/2017/11/29/HTML-Table-to-CSV/)
  - [JavaScript에서 CSV 파일 내보낼 때 UTF-8 인코딩 문제](https://stackoverflow.com/questions/31959487/utf-8-encoding-issue-when-exporting-csv-file-in-javascript)

