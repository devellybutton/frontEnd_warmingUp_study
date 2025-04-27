# 06. 비밀번호 생성기

![Image](https://github.com/user-attachments/assets/5636972e-df0e-4232-a6ad-b7c9b6cbe0af)

-----

## 기능 구현
- 클릭한 종류의 문자열이 비밀번호에 적어도 1개 이상 포함되도록 구현

    ![Image](https://github.com/user-attachments/assets/e9e65c9b-9d1a-4c87-84d2-964cb2768099)

- 모든 체크를 해제하고 'Generate'를 누르면 생성된 비밀번호가 초기화됨

    ![Image](https://github.com/user-attachments/assets/e8bb0661-69e1-4ca9-8cc1-c758c27a7f2b)

## 개발 후기
- 가장 까다로웠던 부분은 체크된 각 옵션의 문자열이 최종 비밀번호에 적어도 1개 이상 포함되도록 하는 로직이었음.
- 처음에는 모든 문자열을 합친 후 랜덤 인덱스를 생성하는 방식을 사용했으나, 이 경우 선택한 옵션의 문자가 최종 비밀번호에 포함되지 않는 경우가 발생해 로직을 수정하였음.

## 참고 자료
- **이미지 출처:**
  - [자물쇠 이미지](https://www.freepik.com/free-vector/padlock-security-safeguard-with-code-key-vector-locked-padlock-privacy-protect-tool-close-box-with-password-combination-system-lock-secure-equipment-template-realistic-3d-illustration_25191429.htm)
  - [배경 이미지](https://www.vecteezy.com/vector-art/23509276-gold-and-black-colors-bricks-wall-background-abstract-line-geometric-backdrop-minimal-design-style-stone-wall-texture-background-futuristic-art)
  
- **개발 참고 링크:**
  - [CSS 챌린지](https://wooooooak.github.io/css%20challenge/2019/02/03/css_challenge_2/)