var reverseWords = function (s) {
  // reverse string
  // 앞 뒤에 " " 이 있는 경우 제거,
  // 단어 사이에 " "이 두 개 이상인 경우 하나만 있도록 처리 있는 경우 제거

  // 관건은 단어 사이에 한 개보다 많은 space를 어떻게 제거하냐 인듯.

  // 이전 값과 현재 값을 비교해서 둘다 space인 경우 처리하지 않는다로 해결해보자.
  const trimmedString = s.trim();

  const sArr = trimmedString.split(" ");

  const reversedSArr = [];

  console.log(sArr);

  for (let i = sArr.length - 1; i >= 0; i--) {
    if (sArr[i] !== "") {
      reversedSArr.push(sArr[i]);
      reversedSArr.push(" ");
    }
  }
  console.log(reversedSArr);

  return reversedSArr.join("").trim();
};

console.log(reverseWords("blue is the sky"));

// 다른 사람 솔루션.
// 내 솔루션이 최상인가에 대해서 의구심이 많아서 조금 봤음
var reverseWords2 = function (s) {
  return s
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ");
};

// 1. filter를 사용할 생각을 전혀 못했다는 점.
// 2. filter를 이용해서 필요없는 값들은 다 지워버리고, 공백 하나씩만 삽입해서 join() 함수를 실행하면 됐네.
