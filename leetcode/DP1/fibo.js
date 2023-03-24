// 509. Fibonacci Number

// Given n, calculate F(n-1) + F(n-2)

// 재귀함수를 가장 기본적인 형태로 쓸 수 있는지 묻는 문제

// const fib = function (n) {
//   // base case
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(25));

// Time limit exceeded 에러가 발생함

//---

// DP 의 목적은 근데 이런 풀이가 아니다.

// 동적 계획법의 알고리즘은 아래와 같다.

/**
 * - 문제를 부분 문제로 나눈다.
 * - 가장 작은 문제의 해를 구한 뒤, 테이블에 저장한다.
 * - 테이블에 저장되어 있는 데이터로 전제 문제의 해를 구한다.
 *
 * 피보나치 수열의 경우, f(n) = f(n-1) + f(n-2) = f(n-2) + f(n-3) + f(n-3) + f(n-4) = ...이런 식으로 여러번 중복된 연산을 처리하게 된다.
 * -> 이 중복을 memoize 해서 필요할 때 가져다 쓰는 형태로 반복을 줄이는 전략을 취하는 것
 *
 */

const fib = function (n) {
  // 안에서 실제 처리해줄 함수를 만든다.

  // 0,1 은 미리 넣는다.
  let fibonacciNumbers = [0, 1];

  let fibo = (n) => {
    // 있으면 가져다 쓴다.
    if (fibonacciNumbers[n] !== undefined) {
      return fibonacciNumbers[n];
    }

    // 없으면 만들어서 return
    fibonacciNumbers[n] = fibo(n - 1) + fibo(n - 2);
    return fibonacciNumbers[n];
  };

  return fibo(n);
};

console.log(fib(10));
