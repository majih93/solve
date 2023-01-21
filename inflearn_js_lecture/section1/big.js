// 대문자 찾기

// 문자열 순환하면서, 해당 문자를 대문자로 변경한 값이 해당 문자와 같은 경우 ++

function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x.toUpperCase() === x) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("KoreaTimeGood")); // 3
