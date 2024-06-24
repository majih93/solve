// 2798 블랙잭

// 모든 경우를 다 탐색해서 가장 가까운 값을 처리해야되는 문제

// N장의 카드 중에서 총합이 M에 가장 가까운 카드 3장의 합을 출력

// 문제에 대해 생각.

// 코딩하기 전에 생각...

// 종료되는 조건이 있는지?
// 합이 M과 일치하는 경우 바로 종료시켜도 된다.

// 해결해야 되는 문제.
// 어떻게 모든 경우의 수를 탐색할 것인가?

// 하나를 정하고, 다음 숫자를 정해서 다 탐색한 이후에 다음 숫자로 넘어가고 해야되는데...
// 3중 for문은 근데 효율이 좋지 않은데 어떻게 3중 for문을 방지하지

// 값이 더해지고 빠지고 하는 처리가 필요한데,

// 생각난 방식
// stack으로 넣었다 뺐다 처리.
// 애초에 처리하는 값이 index이므로 세 번째 인덱스에서 매번 인덱스를 통해서 합을 구하면 된다.
// 스택이 전혀 필요없는문제였음..

// 입력 형식
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const card = input[1]
  .split(" ")
  .map((a) => +a)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = card[i] + card[j] + card[k];
      if (sum <= M && sum > answer) {
        answer = sum;
      }
    }
  }
}

console.log(answer);
