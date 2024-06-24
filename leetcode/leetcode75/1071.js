// 1071. Greatest Common Divisor of Strings

// 풀이 전략
// 풀이 전략이 어떻게 되어야 할까?

// 하나씩 더하는거 자체는 좋은데,

// 문제는 ABABAB 와 ABAB 같은 케이스를 거를 수 없어진다는거..

// 길이로 체크를 해야하나?

// 음 문제를 우선 더 쪼개서 생각해보자.

// 케이스1. 같은 문자열로 반복된다.
// 케이스2. 다른 문자열로 반복된다.
// 케이스3. 애초에 이상한 문자열이다.

// 모르겠다!!! 살려줘라 꾀꼬리!!!

// smart 한 방법을 찾으려고 해서 문제다 일단 문제를 해결하고 그리고 난 다음에
//

// ------------------버전 1 -----------

// 아래 버전도 통과는 된다. 그런데 더 간단한 코드를 생각해내서 수정해서 통과함
// const isRepeating = (s1, s2) => {
//   return s1 === s2.repeat(s1.length / s2.length);
// };

// const deleteLastCharacter = (s) => {
//   return s.slice(0, -1);
// };

// var gcdOfStrings = function (str1, str2) {
//   let answer = "";

//   let idx = 0;

//   const minLength = Math.min(str1.length, str2.length);

//   while (str1[idx] === str2[idx] && idx < minLength) {
//     answer += str1[idx];
//     idx++;
//   }

//   // 답의 길이가 0이상인 경우 검증
//   if (!answer) return "";

//   while (!isRepeating(str1, answer) || !isRepeating(str2, answer)) {
//     answer = deleteLastCharacter(answer);
//     if (!answer) break;
//   }

//   return answer;
// };

// ------버전2 ------

// 굳이 나중에 지워줄 필요 없이, 반복문에서 나뉘어지는 최대 길이를 검증하는 형태로 구현하였음.

var gcdOfStrings = function (str1, str2) {
  function isRepeating(s1, s2) {
    return s1 === s2.repeat(s1.length / s2.length);
  }

  let answer = "";
  let idx = 0;

  // while문의 종료조건 설정하기 위해서 둘 string의 길이 중 짧은 값 저장
  const minLength = Math.min(str1.length, str2.length);

  // 반복되어서 각 텍스트를 구성하는 최대 길이를 담을 변수
  let maxDivisorLength = 0;

  while (str1[idx] === str2[idx] && idx < minLength) {
    answer += str1[idx];
    idx++;
    // 만들어진 answer가 각 string의 divisor인지 확인하고 맞는 경우 maxStringLength를
    if (isRepeating(str1, answer) && isRepeating(str2, answer)) {
      maxDivisorLength = idx;
    }
  }

  // 나눠지는 최대 길이가 answer보다 긴 경우
  // answer를 maxDivisorLength 만큼 자른다.
  if (maxDivisorLength < answer.length) {
    answer = answer.substring(0, maxDivisorLength);
  }

  return answer;
};

// console.log(
//   gcdOfStrings(
//     "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
//     "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
//   )
// );
