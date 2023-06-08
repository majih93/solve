// 팩토리얼

// 재귀적으로 처리하면 된다.

function solution(N) {
  let answer;

  function DFS(L, f) {
    if (L === 2) {
      // 종료 조건 -> 마지막 1에 도달했을 때.
      // 2로 처리해도 됨
      answer = f * 2;
      return;
    } else {
      DFS(L - 1, f * L);
    }
  }

  DFS(N, 1);

  return answer;
}

console.log(solution(5));

// 더 간단하게 할 수 있구나..

function lecture_solution(N) {
  let answer;

  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }

  answer = DFS(N);

  console.log(answer);
}

lecture_solution(5); // 120

// 실행 순서
// DFS(5) 실행
// 1 이 아니므로, 5 * DFS(4)
// -> 5 * 4 * DFS(3)
// ....
// -> 5 * 4 * 3 * 2 * DFS(1) -> DFS(1) returns 1
