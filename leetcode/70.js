// 70. Climbing Stairs.

// 한 번에 계단을 1개 또는 2개를 오를 수 있을 때, n 개의 계단을 오르는 서로 다른 방법의 수는?

// 재귀 및 dynamic programming 공부할 때 봤었던 문제다.

// 문제의 본질은, 작은 문제로 쪼개서 작은 문제를 해결하면 큰 문제도 해결된다는 것.

var climbStairs = function (n) {
  // n 번째 계단까지 가는 경우의 수는
  // n-2 번째에서 한 번에 가거나,
  // n-1 번째에서 한 번에 가거나.

  // 3번째 계단까지 가는 방법의 수는
  // 1번째 계단 - 1 가지
  // 2번째 계단 - 2 가지
  // 1번째 계단에서 바로 가거나
  // 2번째 계단에서 바로 가거나
  // 즉 직전 2개 계단 각각까지 도달하는 경우의 수를 합하면 된다.

  // 3번째계단 - 4가지
  // 4번째 계단 - 6가지

  // f(n) = f(n-1)+ f(n-2) 인 형태가 되는 것이다.

  // 이걸 코드로 써내면 된다.

  // time limit 이 존재하는 경우 -> memoization 기법을 적용해야 한다.

  const memoMap = new Map();

  function recursive_logic(n) {
    if (n <= 2) return n;

    if (!memoMap.has(n)) {
      return memoMap.get(n);
    } else {
      const value = recursive_logic(n - 1) + recursive_logic(n - 2);

      memoMap.set(n, value);

      return value;
    }
  }

  return recursive_logic(n);
};

console.log(climbStairs(4));

// 일단 통과는 됐는데, 공간복잡도가 높게 나옴..

// 그리고 굳이 map 을 쓰는 건 그냥 내 재미일 뿐, 배열이 더 직관적인 듯 하다.

// 데이터 담을 배열
const mem = [];

function solution_using_arrays(n) {
  if (n <= 2) return n;
  if (mem[n] !== undefined) return mem[n];
  mem[n] = solution_using_arrays(n - 1) + solution_using_arrays(n - 2);
  return mem[n];
}
