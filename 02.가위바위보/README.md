# 02. 가위바위보 게임

![Image](https://github.com/user-attachments/assets/c103d501-fc88-44fc-9978-2da774c14cfd)

-----

## 게임 규칙
1. 사용자는 바위, 가위, 보 중 하나를 선택한다.
2. 컴퓨터는 무작위로 바위, 가위, 보 중 하나를 선택한다.
3. 사용자와 컴퓨터의 선택을 비교하여 승부를 결정한다.
4. 각 회차별 승부 결과와 점수는 화면에 표시된다.
5. 10회 진행 후 게임 종료. 최종 승부 결과와 재시작 버튼이 나타난다.
6. 재시작 버튼을 누르면 게임을 다시 시작할 수 있다.

## 시연

![Image](https://github.com/user-attachments/assets/3a96222f-f774-4d89-9670-9756dafb650a)

![Image](https://github.com/user-attachments/assets/16c552a9-e94e-41bc-8ed1-45d521228017)

## 기능 구현
- 게임의 각 회차별 기록, 시작과 끝을 명확히 알 수 있도록 화면에 각 수치들을 렌더링
- 가위바위보 버튼을 지나치게 빨리 누르는 것을 방지하기 위해 최소 0.5초에 1번씩 작동하도록 제한

## 개발 후기
- 간단한 게임 로직에 비해 버그 수정에 예상 외로 많은 시간이 소요되었음. 처음 모든 코드를 하나로 작성했을 때는 버그 찾기가 어려웠으나, **함수 단위로 로직을 분리**한 후 문제 해결이 수월해졌음. 
- 특히 게임 재시작 시 카운트가 2회씩 감소하는 문제는 **이벤트 리스너 중복 등록** 때문이었고, 이를 제거하고 로직을 분리하여 해결했음. 
- 이를 통해 **체계적인 코드 작성의 중요성**을 깨달았으며, 향후 이벤트 처리에 대해 더 깊이 공부할 필요성을 느꼈음.

## 참고 자료
- **이미지 출처:** [Vector Stock](https://www.vectorstock.com/royalty-free-vector/rock-paper-scissors-hand-gesture-vector-25169740)
- **개발 참고 링크:** [CSS 원 그리기](https://oursmalljoy.com/css-%EC%9B%90-%EA%B7%B8%EB%A6%AC%EA%B8%B0-border-radius%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%9E%88-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8B%A4/)