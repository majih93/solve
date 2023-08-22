// fib_memoization

// Dynamic Programming

// Part1. Memoization

// Part2. Tabulation

// The classic implementation of a fibonacci sequence using recursion

const fib = (n) => {
  if (n <= 2) return 1;

  // 1부터 n까지

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));

// 이런 식으로 재귀적으로 피보나치 배열의 n 번째 수를 알아낼 수 있음

// 하지만 위의 구현 방식에는 큰 문제가 있다.

// n 이 커질수록 함수 실행 시간이 기하급수적으로 길어진다는 점.
// The function has correctness but lacks efficiency.

// 문제를 해결하기 위해서는, 어떤 부분을 개선할 수 있는지 찾는 것이 제일 중요하다.

// 컨셉을 이해한 상태에서, 먼저 함수를 한 번 만들어보자.

const memoArr = Array(51).fill(0);

memoArr[1] = 1;
memoArr[2] = 1;

const memoFib_trial1 = (n) => {
  if (n <= 2) return 1;

  let first;
  let second;

  if (memoArr[n - 2] !== 0) {
    first = memoArr[n - 2];
  } else {
    memoArr[n - 2] = memoFib_trial1(n - 2);
    first = memoArr[n - 2];
  }

  if (memoArr[n - 1] !== 0) {
    second = memoArr[n - 1];
  } else {
    memoArr[n - 1] = memoFib_trial1(n - 1);
    second = memoArr[n - 1];
  }

  return first + second;
};

// 근데 코드를 조금 더 심플하게 작성할 수 있지 않을까?

const memoFib_trial1_improved = (n) => {
  // 배열에 해당 값이 있으면, 해당 값을 바로 return -> 굳이 나중에 조건체크 필요가 없음
  if (memoArr[n]) return memoArr[n];
  if (n <= 2) return 1;

  memoArr[n] = memoFib_trial1_improved(n - 2) + memoFib_trial1_improved(n - 1);

  return memoArr[n];
};

// the time complexity part is to be continued....

console.log(memoFib_trial1(7));
console.log(memoFib_trial1(50)); // 빨리 계산된다!!!
