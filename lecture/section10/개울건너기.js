// 개울 건너기.

// 계단오르기랑 매우 흡사해보이긴 하는데,
// 계단은 해당 계단에 오르면 끝이지만 개울은 '건넜다'라고 표현하려면 마지막 돌위에 있는 것이 아니라 반대쪽 땅을 밟은 상태여야 한다.

// 그러면 추가로 고려되어야 하는 부분이뭘까?

// n + 1번째 계단에 도착하는 숫자를 구하는 형태가 되어야 한다는 것이겠지?

function solution(n) {
  let answer;

  let sols = Array(n + 2).fill(0); // n+1번째 위치에 도달하는 것을 목표로 숫자를 구해야 한다.

  sols[1] = 1;
  sols[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    sols[i] = sols[i - 2] + sols[i - 1];
  }

  answer = sols[n + 1];

  return answer;
}

console.log(solution(7)); // 34
