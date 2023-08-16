function solution(n, arr) {
  let answer = 0;

  // 간선 및 이동 정보를 담을 그래프 자료구조
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 1번 인덱스부터 사용하고자 하나 더 큰 수를 기준으로 배열 생

  let visited = Array(n + 1).fill(0); // 방문한 노드는 재방문하지 않도록 하기 위해서 방문기록 담는배열

  // [a,b] 형태로 펼쳐서도 배열 순회가 가능하다는 점!
  for (let [a, b] of arr) {
    graph[a][b] = 1; // 방향그래프이기 때문에 하나만 설정
  }

  function DFS(v) {
    if (v === n) answer++; // 마지막 노드 달성 시 하나의 경우의 수로 count
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && visited[i] === 0) {
          visited[i] = 1;
          DFS(i);
          visited[i] = 0;
        }
      }
    }
  }

  visited[1] = 1;
  DFS(1);

  return answer;
}

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(5, arr));

// 2차원 배열 생성 로직 explained
// Array.from(iterable object, mapping func)
// 즉 비어있는 길이 n+1의 배열에 대해서, 각 요소에 mapping func 가 return 하는 값을 할당한다.

// 이 경우에는 0으로 채워진 길이 n+1의 배열이 매번 각 index 자리값에 할당되는 것
