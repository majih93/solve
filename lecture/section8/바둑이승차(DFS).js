// 바둑이 승차(DFS)

// 풀이 전략

// 합이 같은 부분집합 문제에서 강의 풀이에 적용했던, Sum 을 같이 넘기는 방식을 활용하면 될듯.

// Sum 이 C를 초과한 경우 해당 부분집합은 더이상 뻗어나갈 의미가 없음.
// 넘지 않았다면, Sum 에 대해서 기존 가장 무거운 무게를 담고 있는 변수 max 와 비교해서 Sum 이 더 크면 max를 교체

// 조기 종료 조건
// 1. Sum 이 C를 초과
// 2. max가 C 와 같음

let count = 0;

function solution(C, weightArr) {
  // answer 가 max 값으로 처리되면 된다.
  let answer = Number.MIN_SAFE_INTEGER;

  // 상태 담을 배열
  const partialArr = Array(weightArr.length).fill(0);

  function DFS(L, Sum) {
    count++;
    // 조기 종료 조건
    if (Sum > C || answer === C) return;

    if (L === weightArr.length) {
      // 마지막 노드레벨까지 처리된 후에 실행되어야 하는 로직
      // if (Sum > answer) answer = Sum;
      answer = Math.max(answer, Sum); // 강의에서는 이런 식으로 처리했는데, 둘 다 괜찮은 듯 하다.
    } else {
      // 부분집합에 포함되는 경우 === 합에 무게가 추가되는 경우
      DFS(L + 1, Sum + weightArr[L]);

      // 부분집합에 포함되지 않는 경우 === 합에 무게가 추가되지 않는 경우
      DFS(L + 1, Sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61])); // 242

// 강의 풀이도 거의 동일함.
