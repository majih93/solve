// 수들의 조합

// N개의 정수 중에서 K개를 뽑을 때 가능한 조합 중 조합 숫자들의 합이 M의 배수인 경우의 수를 구해보자.

function solution_1(numArr, K, M) {
  let answer = 0;

  let temp = Array(K).fill(0);

  // 탐색함수
  function dfs(level, index) {
    // 종료조건
    if (level === K) {
      // console.log(temp);
      // temp 복사해서 처리 -> 아니구나 합을 구하는 거니까 어차피 그때그때 처리해도 상관이 없음
      const sum = calcArraySum(temp);

      if (sum % M === 0) {
        answer++;
      }
      return;
    } else {
      // 처리로직
      // 반복문 시작은 어디에서 부터? 직전에 추가된 index + 1 부터 처리되어야 하겠지?
      // 문제는 어디까지 반복되어야 하는 것인데.. -> 가능한 범위 내에서 반복 처리
      for (let i = index; i < numArr.length; i++) {
        temp[level] = numArr[i];
        dfs(level + 1, i + 1);
      }
    }
  }

  dfs(0, 0);

  return answer;
}

function calcArraySum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(solution_1([2, 4, 5, 8, 12], 3, 6));

// 우선 n 개의 정수 중에서 k 개를 뽑는 조합들을 구하는 것에서 시작

// 이전에 조합에 담은 숫자의 인덱스를 저장해야 함
// 종료조건은 몇 단계를 거쳤을 때 배열의 k 번째 수가 채워지는지 판단 후 처리

// level 0 에서 시작

// level 1에서 1번째 수 결정 -> k에서 K번째 수 결정됨
// 즉 level === k 일 때 종료시키면 된다.
// 주의사항 -> 배열 처리 시 참조에 따른 의도치 않는 값 변경에 주의!!!
