// 재귀함수

// function recursion(n) {
//   if ((n = 0)) return;
//   console.log(n);
//   recursion(n - 1);
// }

// the above code causes maximum call stack size exceeded error
// why?

function recursion(n) {
  if (n === 0) return; // === 으로 비교 연산자를 사용했어야 한다.
  console.log(n);
  recursion(n - 1);
}

console.log(recursion(10));
