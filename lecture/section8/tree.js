// 이진트리 순회(깊이 우선탐색)

// 전위순회
// 1 - 2 - 4 - 5 - 3 - 6 - 7 순으로 출력되어야 한다.

// 트리에서 기본적인 사항

// 왼쪽 자식은 부모 노드 * 2
// 오른쪽 자식은 (부모노드 * 2 + 1)

// 깊이 우선 탐색은...

// root node 에서 우선 왼쪽으로 타고 들어간다.
// 또 왼쪽으로 탄다(가장 마지막 레벨자식노드까지)

// 전위순회 - 부모 -> 왼쪽자식 -> 오른쪽 자식 순
// 중위순회 - 왼쪽 자식 -> 부모 -> 오른쪽 자식 순
// 후위순회 - 왼쪽 자식 -> 오른쪽 자식 -> 부모 순

// 부모가 기준이라는 점!

// 처음에는 일단 if else 구조로 푸는 연습을 하자

function solution(v) {
  let answer;

  function DFS(v) {
    if (v > 7) {
      // 종료지점
      return;
    } else {
      // console.log(v); // 재귀 로직 실행 전에 값을 출력하는 경우 전위순회처리 되는 것처럼 된다.
      // 1 2 4 5 3 6 7
      // 재귀적으로 실행되는 로직
      DFS(v * 2); // 왼쪽 자식은 *2

      // console.log(v); // 두 로직 사이에 값을 출력하는 경우 중위순회처리 되는 것처럼 된다.
      DFS(v * 2 + 1); // 오른쪽 자식은 *2 + 1

      console.log(v); // 재귀 로직 후에 값을 출력하는 경우 후위순회처리 되는 것처럼 된다.
    }
  }

  DFS(v);

  return answer;
}

console.log(solution(1));

// 왜 재귀 로직 전에 실행하면 전위순회처럼 되는지?
// 전위순회는 부모 -> 왼쪽 -> 오른쪽
// DFS 에 입력된 값은 부모 노드의 값이다.
// 즉, 먼저 해당 값 찍으면 부모 노드의 값이 찍힘
// -> 그리고 왼쪽 노드 오른쪽 노드 순으로 처리하는 것이다.
// 다른 경우도 마찬가지.
