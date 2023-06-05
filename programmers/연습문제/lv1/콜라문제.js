function solution(a, b, n) {
  var answer = 0;

  function recursive(empty, remainder) {
    if (empty + remainder < a) return;

    // 빈 병으로 받을 수 있는 콜라 병 수 더하기
    const colaCount = parseInt((empty + remainder) / a) * b;
    answer += colaCount;
    currentRemainder = (empty + remainder) % a;

    recursive(colaCount, currentRemainder);
  }

  recursive(n, 0);

  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9

// 재귀함수로 풀었음
// 이전 재귀에서 받은 콜라병 수 + 기존에 처리안된 빈병 수 를 기준으로 계속 돌다보면 될 거라고 생각하고 풀음
