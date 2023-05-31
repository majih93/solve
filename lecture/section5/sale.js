/**
 * 최대 매출
 *
 * N 일 동안의 매출 기록 안에서, 연속된 K 일 동안의 매출의 합 중 최대값 구하기
 */

/**
 * 풀이전략
 *
 * p1 과 p2 를 고정된 범위에서 이동시키면서 해당 범위의 총합을 구하면되는데..
 * -> 모든 배열 값을 계속 구하기보다는 p1값 -= p1++, p2++ 하고 p2값 +=
 */

function solution(arr, K) {
  let maxSum = arr.slice(0, K).reduce((acc, curval) => acc + curval);

  let tempSum = maxSum;

  for (let lt = 1; lt < arr.length - K; lt++) {
    console.log(lt - 1, lt + K - 1);

    tempSum -= arr[lt - 1];
    tempSum += arr[lt + K - 1];

    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56

// 선생님 풀이

// 나는 투포인터 느낌으로 접근했는데, sliding window라고 하셨음
// 둘이 비슷하구나!!
