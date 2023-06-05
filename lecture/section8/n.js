// 자연수 n 이 입력되면, 재귀함수를 이용하여 1 부터 n 까지를 출력하는 프로그램을 작성
// 이 부분의 컨셉을 이해하는 것이 차후 백트래킹, DFS, BFS 등을 이해하는데 아주 중요함
// L is for level in a tree
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    console.log(L);
    DFS(L - 1);
  }

  DFS(n);
}

solution(3); // 3 2 1\

// but 문제에서는 1 2 3 으로 찍히는 것을 요구하였음 how?
// 포인트는 실행 순서를 바꾸는 것.
// 즉 함수가 어떻게 실행되는지에 대해서 잘 이해하고 있어야 한다는 의미가 되겠다.

function solution2(n) {
  function DFS(L) {
    if (L === 0) return;

    DFS(L - 1);
    console.log(L); // 순서가 변경되었음 즉, DFS(L+1) 의 console.log 문은 DFS(L) 의 console.log 문보다 나중에 실행된다 순서상
  }

  DFS(n);
}

solution2(3); // 1 2 3

// 이 원리를 이해해야지 DFS 백트래킹 등 기업을 잘 사용할 수 있다.

// 구글링 해보기 stack frame
