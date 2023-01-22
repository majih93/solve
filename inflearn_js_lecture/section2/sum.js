// 격자판 최대합

// 열 합/행 합/대각선 합 중 가장 큰 합 출력

// 열 합/행 합/ 대각선 합 반복문 통해 구하면서 더 큰 합이 있는 경우 답을 해당 값으로 교체하면서 모든 반복분기 처리하는 형태로 구현

const array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(N, arr) {
  let answer;

  let rowMax = Number.MIN_SAFE_INTEGER;
  let colMax = Number.MIN_SAFE_INTEGER;
  let diagonalMax1 = 0;
  let diagonalMax2 = 0;

  for (let i = 0; i < N; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < N; j++) {
      // 열에 대한 총합 구하기
      rowSum += arr[j][i];
      // 행에 대한 총합 구하기
      colSum += arr[i][j];

      if (i === j) {
        diagonalMax1 += arr[i][j];
      }

      if (i + j === N) {
        diagonalMax2 += arr[i][j];
      }
    }

    if (rowSum > rowMax) rowMax = rowSum;
    if (colSum > colMax) colMax = colSum;
  }

  if (rowMax >= colMax) {
    answer = rowMax;
  } else {
    answer = colMax;
  }

  if (diagonalMax1 >= diagonalMax2) {
    if (answer < diagonalMax1) answer = diagonalMax1;
  } else {
    if (answer < diagonalMax2) answer = diagonalMax2;
  }

  return answer;
}

console.log(solution(5, array)); // 155

// 선생님 풀이
