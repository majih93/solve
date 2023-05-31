/**
 * // 연속 부분 수열 2
 * 수열에서 연속 부분 수열의 합이 M 이하가 되는 경우를 count
 */

/**
 * 풀이전략
 *
 * ~ 이하인 경우를 구하기 위해서는 전략이 조금 수정되어야할 듯 함
 * - 이하인 경우를 구해야하니까, 기준값부터 해서 최대한 구하고, -> 기준값 및 합초기화 해서 다음 기준값 다시 탐색하고 이런 느낌으로 가야함
 */

// function solution(arr, M) {
//   let answer = 0;

//   let p1 = 0;
//   let p2 = 0;

//   let tempSum = 0;

//   // 이하일지 미만일지 결정하는 요소는 무엇이 되어야 하는가.
//   while (p1 <= arr.length) {
//     if (tempSum < M) {
//       // p2 값을 더하고, p2++
//       answer++;
//       tempSum += arr[p2++];
//     } else if (tempSum > M) {
//       tempSum = 0; // 합 값 초기화
//       p1++;
//       p2 = p1;
//     } else if (tempSum === M) {
//       answer++;
//       tempSum = 0;
//       p1++;
//       p2 = p1;
//     }
//   }

//   return answer;
// }

// console.log(solution([1, 2, 1, 2, 3], 5));

// 뭘 놓치고 있는지 잘 모르겠음

// 선생님 풀이

// 해당 반복분기에서 숫자를 더한 후에, 총 합이  M 보다 작은 경우 === 해당 분기에 추가된 숫자가 포함된 lt 까지의 부분수열은 M 보다 작을 수 밖에 없다.

function solution(arr, M) {
  let answer = 0;

  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > M) {
      sum -= arr[lt++];
    }

    answer += rt - lt + 1;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5)); // 10
