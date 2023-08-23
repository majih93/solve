// 첫 번째로는 피보나치 수열을 메모이제이션 기법을 활용해서 시간 복잡도를 줄여서 구현하는 방법을 공부하였음

// grid traveler

// n * m 의 grid 에서 right, down 으로만 움직일 때, 0,0 에서 n-1, m-1 에 도달하는 방법의 수는?

// 문제를 풀 때, 내가 아는 문제 풀이를 적용할 수 있는 구석이 있는 지 파악하는 것이 중요

// grid 문제 같은 경우도, 우선 가장 최소한의 문제를 푼다고 생각하고 문제를 풀어보자.

// 1 * 1 이 가장 작은 형태의 그리드가 되겠다.

// 이때, Start 와 end 는 같은 지점이고, 가는 방법은 오직 한 가지 뿐

// 왜 1 * 1에 대해서 생각해보는가?
// They are base cases to reconstruct a larger answer;

// 3 * 3 grid를 생각해보자.
// 0,0 에서 1,0 으로 이동 시, 단순히 한 번의 이동이라고 생각할 수도 있지만, 문제 자체가 축소되는 이동이기도 하다.
// 시작점이 1,0 인 상태에서 2 * 3 grid를 이동하는 갯수를 구하는 문제가 됨

// Big problem 을 성격이 같은 sub problem 으로 쪼개는 것.

// base case
// 분기
// 작은 문제

// memo is shared between children nodes of the tree, only initialized at the top node
const g = (m, n, memo = {}) => {
  // are the arguments in the memo
  // concatenate m and n to make a key
  const key = `${m},${n}`;

  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1; // 1 * 1 grid 를 이동하는 경우의 수는 1가지
  if (m === 0 || n === 0) return 0; // 둘 중 하나라도 0인 경우는 invalid case

  memo[key] = g(m - 1, n, memo) + g(m, n - 1, memo);

  return memo[key];
};

console.log(g(3, 3));
console.log(g(18, 18)); // 빠르게 처리됨!!
// memoization is a very formulative thing. -> same code, way of writing same logic
