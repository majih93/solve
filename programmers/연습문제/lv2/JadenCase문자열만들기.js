console.log("2".toUpperCase());

function solution(s) {
  var answer = "";

  const splitTexts = s.split(" ");

  console.log(splitTexts);

  for (let i = 0; i < splitTexts.length; i++) {
    if (splitTexts[i]) {
      console.log(splitTexts[i][0]);
      console.log(splitTexts[i].slice(1));

      let text =
        "" +
        splitTexts[i][0].toUpperCase() +
        splitTexts[i].slice(1).toLowerCase();

      answer += text;

      if (i !== splitTexts.length - 1) {
        answer += " ";
      }
    } else {
      if (i !== splitTexts.length - 1) {
        answer += "  ";
      } else {
        answer += " ";
      }
    }
  }

  return answer;
}

// console.log(solution("hello  1o zeo"));

// 글자 단위로 쪼개서 처리한다.
// 이전에 공백이면, 첫 글자라는 의미로 해석하고 처리
// 공백은 알아서 공백으로 처리됨.
// 0번째 인덱스는 -1에 접근할 수 없으므로 사전에 처리.
function solution2(s) {
  let arr = s.split("").map((x) => x.toLowerCase());

  console.log(arr);

  arr[0] = arr[0].toUpperCase();

  for (i = 1; i < arr.length; i++) {
    if (arr[i - 1] === " ") {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join("");
}

console.log(solution2("for the last week"));
