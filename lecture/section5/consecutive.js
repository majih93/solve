/**
 * 연속 부분 수열
 *
 * 연속 부분 수열의 합이 M 이 되는 경우가 몇 번 있는지 retur
 */

/**
 * 풀이 전략
 *
 * p1 = 시작 인덱스
 * p2 = 시작인덱스에서 시작해서, 조건 충족될 때까지 우측으로 이동 및 처리
 *
 * 경우의 수가 뭐가 있을까..
 * 합의 값이 M 보다 작음
 * 합의 값이 M 보다 큼
 * 합의 값이 M 이랑 같음
 */

function solution(arr, M) {
  let answer = 0;

  let p1 = 0;
  let p2 = 0;
  let tempSum = 0;

  while (p2 <= arr.length) {
    if (tempSum < M) {
      tempSum += arr[p2];
      p2++;
    } else if (tempSum > M) {
      tempSum -= arr[p1];
      p1++;
    } else if (tempSum === M) {
      console.log(`p1:${p1}, p2: ${p2 - 1}`);
      answer++;
      tempSum -= p1;
      p1++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 2
