//  봉우리

// 가장자리는 0

// 상하좌우보다 크다면, 해당 값은 봉우리에 해당

// 모든 숫자에 대해서 비교해서 처리하면 되는 것일까?

// N + 2 의 길이를 가지는 0으로 이루어진 배열을 배열의 배열 앞 뒤로 추가하고,

// 배열배열의 모든 배열에 앞 뒤로 0 추가
// 그리고 생성된 배열에 대해서 안쪽의 영역에 대해서 이중 for문 통해서 모든 숫자를 비교

const array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function solution(N, arr) {
  let answer = 0;
  // 배열배열의 각 배열 앞 뒤로 0 삽입
  for (let i = 0; i < N; i++) {
    arr[i].unshift(0);
    arr[i].push(0);
  }
  // 0으로 된 테두리 감싸는 작업
  const zeroArray = [];

  // 길이가 2만큼 더 긴 0으로 만든배열 생성
  for (let i = 0; i < N + 2; i++) {
    zeroArray.push(0);
  }

  // 배열 목록 앞 뒤로 삽입
  arr.unshift(zeroArray);
  arr.push(zeroArray);

  // 만들어진 배열에 테두리를 제외한 영역의 값들에 대해서 봉우리인지 체크
  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      // 특정 배열값을 상하좌우와 비교
      if (
        arr[i][j] > arr[i - 1][j] &&
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i][j - 1] &&
        arr[i][j] > arr[i][j + 1]
      ) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(5, array)); // 10
