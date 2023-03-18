// A 를 #로

// 문자열 순환하면서 일치하는 경우 변환하는 작업 처리

// 새로운 문자열에 순환하면서 더하는 형태로 풀어보면 될 듯

function solution(str) {
  let answer = "";

  for (let x of str) {
    console.log(x); // 글자가 하나씩 찍힘

    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }

  return answer;
}

console.log(solution("BANANA"));
