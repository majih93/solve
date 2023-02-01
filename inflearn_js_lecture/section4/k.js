/**
 * K번째 큰 수
 *
 * N장의 카드
 * 3장을 뽑아서, 세 수의 합을 기록
 * 3장을 뽑을 수 있는 모든 경우의 수로 구해진 합 중에서, K번째로 큰 수를 출력
 */

/**
 * 풀이 전략
 *
 * - 3개의 수를 뽑아서 다 더하는 모든 경우의 수를 구해서 그 합들의 배열을 구하고
 *    -> 어떻게 조금 더효율적으로 모든 경우의 수를 구할 수 있을까
 *    -> 3중 for 문은 너무 비효율적일거같은데..
 * - 해당 배열을 내림차순으로 sort 해서, 중복된 숫자 제외하고 k번째로 큰 수 반환 -> 중복 제거를 고려해야하니까 set 로 변환해서 처리하는 방법 고려
 *
 * 이 문제 포인트는 모든 경우의 수를 어떻게 효율적으로 뽑느냐 일듯?
 */

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기

    // 이 문제는 합을 구해야하므로, 각 배열에 대해서 합을 처리
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(N, K, numberArr) {
  // 모든 경우의 수를 담은 배열에 대해 각 배열의 합으로 변환
  const sumArray = getCombinations(numberArr, 3).map((el) =>
    el.reduce((acc, curVal) => acc + curVal)
  );

  // 합의 배열 내림차순 정렬
  sumArray.sort((a, b) => b - a);

  // set 를 활용해서 중복 제거
  const removeDuplicate = [...new Set(sumArray)];

  return removeDuplicate[K - 1];
}

console.log(solution(10, 3, arr)); // 143

// 선생님 풀이

// 3중 for 문으로 풀었음

// 값을 담을 자료구조를 애초에 Set 으로 선언해서 중복을 제거하고,
// Set 로부터 array를 만들어서 sort 한 후 정답처리
