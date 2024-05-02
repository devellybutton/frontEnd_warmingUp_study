// 초성퀴즈
// 30문제 중 랜덤으로 N개 출제됨
const wordQuizData = [
  // 동물 이름 10문제 (1~10)
  {
    id: 1,
    question: "ㄱㅇㅇ",
    hint: "동물",
    answer: "고양이",
  },
  {
    id: 2,
    question: "ㅂㅇㄹ",
    hint: "동물",
    answer: "병아리",
  },
  {
    id: 3,
    question: "ㅇㄹㅁ",
    hint: "동물",
    answer: "얼룩말",
  },
  {
    id: 4,
    question: "ㅅㅅ",
    hint: "동물",
    answer: "사슴",
  },
  {
    id: 5,
    question: "ㅌㄲ",
    hint: "동물",
    answer: "토끼",
  },
  {
    id: 6,
    question: "ㄷㄹㄴ",
    hint: "동물",
    answer: "도롱뇽",
  },
  {
    id: 7,
    question: "ㅊㅅㅁ",
    hint: "동물",
    answer: "청설모",
  },
  {
    id: 8,
    question: "ㄷㄹㅁ",
    hint: "동물",
    answer: "두루미",
  },
  {
    id: 9,
    question: "ㄴㅌ",
    hint: "동물",
    answer: "낙타",
  },
  {
    id: 10,
    question: "ㅂㄷㄱ",
    hint: "동물",
    answer: "비둘기",
  },
  // 국가 이름 10문제 (11~20)
  {
    id: 11,
    question: "ㄱㄹㅅ",
    hint: "국가",
    answer: "그리스",
  },
  {
    id: 12,
    question: "ㄹㅅㅇ",
    hint: "국가",
    answer: "러시아",
  },
  {
    id: 13,
    question: "ㅇㅈㄹ",
    hint: "국가",
    answer: "알제리",
  },
  {
    id: 14,
    question: "ㅅㅇㄷ",
    hint: "국가",
    answer: "스웨덴",
  },
  {
    id: 15,
    question: "ㅋㄴㄷ",
    hint: "국가",
    answer: "캐나다",
  },
  {
    id: 16,
    question: "ㄱㅌㅁㄹ",
    hint: "국가",
    answer: "과테말라",
  },
  {
    id: 17,
    question: "ㅇㅋㄷㄹ",
    hint: "국가",
    answer: "에콰도르",
  },
  {
    id: 18,
    question: "ㄴㅈㄹㄷ",
    hint: "국가",
    answer: "뉴질랜드",
  },
  {
    id: 19,
    question: "ㅅㄱㅍㄹ",
    hint: "국가",
    answer: "싱가포르",
  },
  {
    id: 20,
    question: "ㅁㄱ",
    hint: "국가",
    answer: "몽골",
  },
  // 꽃 이름 10문제 (21~30)
  {
    id: 21,
    question: "ㅌㄹ",
    hint: "꽃",
    answer: "튤립",
  },
  {
    id: 22,
    question: "ㄴㅍㄲ",
    hint: "꽃",
    answer: "나팔꽃",
  },
  {
    id: 23,
    question: "ㄹㅇㄹ",
    hint: "꽃",
    answer: "라일락",
  },
  {
    id: 24,
    question: "ㅎㅇㅅㅅ",
    hint: "꽃",
    answer: "히아신스",
  },
  {
    id: 25,
    question: "ㅁㄹ",
    hint: "꽃",
    answer: "목련",
  },
  {
    id: 26,
    question: "ㅎㅂㄹㄱ",
    hint: "꽃",
    answer: "해바라기",
  },
  {
    id: 27,
    question: "ㅈㅁ",
    hint: "꽃",
    answer: "장미",
  },
  {
    id: 28,
    question: "ㅋㄴㅇㅅ",
    hint: "꽃",
    answer: "카네이션",
  },
  {
    id: 29,
    question: "ㅋㅅㅁㅅ",
    hint: "꽃",
    answer: "코스모스",
  },
  {
    id: 30,
    question: "ㅁㄷㄹ",
    hint: "꽃",
    answer: "민들레",
  },
];

export default wordQuizData;
