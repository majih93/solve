function isNumber(s) {
  return typeof Number(s) === "number" && !Number.isNaN(Number(s));
}

function solution(s) {
  let resultNumberInString = "";

  const numberTexts = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let tempString = "";

  for (const ch of s) {
    // 숫자가 아닌 경우 문자로 처리
    if (isNumber(ch)) {
      resultNumberInString += ch;
    } else {
      // 문자인 경우 일단 tempString에 더하고, 배열에 존재하는지 확인
      tempString += ch;

      const numberIdx = numberTexts.indexOf(tempString);

      // 없는 경우에는 -1이기 때문에 양수인지 확인
      if (numberIdx >= 0) {
        resultNumberInString += `${numberIdx}`; // String으로 숫자에 더해준다.
        // tempString초기화
        tempString = "";
      }
    }
  }

  return Number(resultNumberInString);
}

console.log(solution("one4seveneight"));

// 배울 점이 있는 다른 사람의 코드

function solution_other(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  // numbers배열의 값들에 대해, 한 번씩 돌면서 해당 문자열로 문자를 나눈 뒤, 숫자로 대체해서 다시 join한다.

  // "one4seveneight"
  // ["", "4seveneight"] split하면 (one으로)
  // one에 해당되는 인덱스값 1로 join 하면 -> "14seveneight"
  // 이걸 모든 배열 값에 대해서 반복 후에
  // 합쳐서 number로 변환

  // split과 join의 특성을 이용한게 포인트
  // 함수를 잘 이해하고 쓰면 이게 되는구나.
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log("one4seven".split("one"));
