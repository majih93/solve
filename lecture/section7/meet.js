// 회의실 배정

/**
 * 현재 회의 중 끝나는 시간이 가장 빠른 회의를 고른다(시작 시간이 현재 이후인 상황에서.)
 * -> 반복 분기는 어떻게 설정해야 하는지?
 *
 */

function mySol(arr) {
  let answer = 0;

  // 종료 조건 담을 변수
  let isTimeOver = false;

  let currentTime = arr.sort((a, b) => a[1] - b[1])[0][1];
  console.log(currentTime);

  while (isTimeOver === false) {
    // arr.
  }

  return answer;
}

console.log(
  mySol([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
