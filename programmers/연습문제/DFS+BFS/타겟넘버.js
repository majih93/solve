// 풀이 전략
// DFS 활용해서, 모든 경우의수 탐색
// 각 노드 별로, + 인 경우와 - 인 경우 두 가지 case 가 존재하는 이진트리라고 보면 된다.

// sum 을 같이 처리하는 형태로 해서, 마지막 노드 레벨에서 sum 하고 target 비교하는 형태로 구현

function solution(numbers, target) {
  let answer = 0;

  // 경우의 수 담을 배열
  const partialArr = Array(numbers.length).fill(0);

  function DFS(L, sum) {
    if (L === numbers.length) {
      // 종료조건
      if (sum === target) answer++;
    } else {
      // 양수인 경우
      partialArr[L] = numbers[L] * 1;
      DFS(L + 1, sum + partialArr[L]);

      // 음수인 경우
      partialArr[L] = numbers[L] * -1;
      DFS(L + 1, sum + partialArr[L]);
    }
  }

  DFS(0, 0);

  return answer;
}
