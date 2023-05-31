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

// 선생님 풀이

// 문제긴 한데, 재귀함수가 무엇인지 그리고 재귀함수가 돌아가는 원리가 Stack 이라는 것.
// Stack frame 에 함수가 저장되어서 돌아가는 원리

// 이 원리를 이해해야지 나머지 뒷부분을 이해할 수 있다.

function solution(n) {
  // level 의 l 을 사용하신다고(깊이 레벨)
  function DFS(L) {
    // 종료조건
    if (L === 0) return;
    else {
      console.log(L);
      DFS(L - 1);
    }
  }
  // 내부함수로 구현
  DFS(n);
}

console.log(solution(3)); // 3 2 1

// 1 2 3 으로 찍으려면?

// 33열과 34열의 순서만 바꾸면 된다.

// 여기서 중요한건 순서를 바꾸면 된다 가 아니라, 왜 저 두 순서만 바꿨는데 거꾸로 출력이 될까 이다.
// 이 원리를 알아야지 백트래킹 등에 대해서도 이해할 수 있다.

// DFS 가 스택에 저장되기 때문이다 ( 사실 모든 함수는 스택에 저장되지만 )

// call stack
