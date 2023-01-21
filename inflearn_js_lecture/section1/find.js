// 문자 찾기

// 문자열에 특정 문자 몇 개 있는지 알아내는 방법

// 문자열 순환하면서, 같은 경우 ++하는 형태로 풀어보려고 계획

function solution(str, letter) {
  let answer = 0;

  for (let x of str) {
    if (x === letter) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R")); // 3
