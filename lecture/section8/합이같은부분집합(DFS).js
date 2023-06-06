// 합이 같은 부분집합

// 부분집합 구하기와 같은 로직으로 보인다.
// 다만, 합에 대해서 처리하는 부분이 추가되어야 한다는 점이 차이일 듯.
// 합은, 마지막에 수행되는 출력 로직 대신에, 해당 배열의 값을 다 더했을 때 원래 배열 총합의 1/2 가 되면 됨
// 홀수인 경우에는 안됨

let count = 0;

function solution(n, arr) {
  let answer = "NO";

  const arrSum = arr.reduce((acc, curVal) => acc + curVal, 0);

  // 총합이 홀수인 경우 만족하는 경우가 있을 수 없음
  if (arrSum % 2 === 1) return answer;

  // 순서대로 올라가는 값이 아니므로 인덱스를 활용해서 해당 위치 값을 처리해야 한다.
  const visited = Array(n + 1).fill(0);

  function DFS(v) {
    // 이미 앞전에 답이 YES 로 처리된 경우 더이상 처리가 필요없어짐
    if (answer === "YES") return;

    if (v === n + 1) {
      // 가장 아래 노드에 도착한 경우 -> 결과값에 대한 처리가 필요
      const tempArr = [];

      for (let i = 0; i < n; i++) {
        // visited[i] 가 실제 값
        // if (visited[i] === 1) tempArr.push(visited[i]);
        // visited 로 처리하면 [1,1,1,1,1,1] 이런 배열을 처리하게 된다.
        if (visited[i] === 1) tempArr.push(arr[i - 1]);
      }

      // 총합이 1/2 이 되는지 확인

      const tempSum = tempArr.reduce((acc, curVal) => acc + curVal, 0);

      // console.log(tempArr);
      // console.log(tempSum);

      if (tempSum === arrSum / 2) {
        answer = "YES";
      }
    } else {
      // 뻗어나가야 하는 경우
      // 포함하는 경우
      visited[v + 1] = 1;
      DFS(v + 1);

      // 포함하지 않는 경우
      visited[v + 1] = 0;
      DFS(v + 1);
    }
  }

  // 0번째 인덱스 값부터 시작해서 처리, 인덱스 값이 value 가 아니라는 점 유의
  DFS(0);

  return answer;
}

console.log(solution(6, [1, 3, 5, 6, 7, 10]));

// 강의에서는 애초에 Sum 값도 같이 DFS 함수에 넘겨서 누적시키는 방식으로 처리함
function lecture_solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (flag) return; // 0 === falsy, 1 === truthy 인 점을 이용

    if (L === n) {
      // length === 마지막 인덱스 + 1 === 종착점
      if (total - sum === sum) {
        answer = "YES";
        flag = 1; // 강의에서는 중단 조건을 flag 로 처리함
      }
    } else {
      // 합에 이번 실행의 요소 더해주는 경우 === 부분집합에 포함되는 경우
      DFS(L + 1, sum + arr[L]);

      // 합에 이번 실행의 요소 더하지 않는 경우 === 부분집합에 포함되지 않는 경우
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(lecture_solution([1, 3, 5, 6, 7, 10]));
