// 최대점수 구하기(이진트리 DFS)

// 풀이 전략

// 조건을 체크해야되는 부분은 시간이다 -> 각 부분집합 별로 매번 최대 점수를 갱신하는 형태로 구현해야 될 듯 하다.
// 조기 종료 조건
// 1. Sum(시간의 합) > 제한 시간

function solution(M, scores) {
  // answer를 최대값으로 교체하는 형태로 구현
  let answer = Number.MIN_SAFE_INTEGER;

  // 조건 체크할 함수
  const partialArr = Array(scores.length).fill(0);

  function DFS(L, sum, score) {
    // score는 이전 분기에서 처리된 점수이기 때문에 이번에는 먼저 처리해도 됨
    // 문제 부분집합의 시간합이 제한시간초과하는 경우 더이상 뻗지 않음
    if (sum > M) return;

    if (L === scores.length) {
      // 마지막 노드까지 처리된 후에 다음으로 넘어온 경우
      answer = Math.max(score, answer);
    } else {
      // 필요한 처리
      // score 값이 answer에 포함된 최대점수보다 높은 경우 교체
      answer = Math.max(score, answer);

      // 이번 문제를 풀었다고 계산하는 경우
      DFS(L + 1, sum + scores[L][1], score + scores[L][0]);

      // 이번 문제를 풀지 못했다고 계산하는 경우
      DFS(L + 1, sum, score);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
); // 41

// 강의도 비슷하게 풀었음
