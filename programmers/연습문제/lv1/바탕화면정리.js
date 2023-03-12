/**
 * 문제 포인트
 * 어떻게 시작점과 끝점을 알아내는지?
 * 시작점: 가장 왼쪽에 위치한 열의 상단 열 + 가장 위쪽에 위치한 행의 조합한 칸의 왼쪽 위 점
 * 끝점: 가장 오른쪽에 위치한 열 + 가장 아래쪽에 위치한 행의 조합한 칸의 오른쪽 아래 점
 * 해당 포인트를 어떻게 알아낼 수 있을까?
 * 다 순회하는 수 밖에 없음
 */

function solution(wallpaper) {
  let answer = [];

  let topRow = -1;
  let leftCol = wallpaper[0].length;
  let bottomRow;
  let rightCol = -1;

  // wallpaper 순회하면서 값 저장
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        // 최초로 등장한 최상단 값인 경우 -> 가장 상단 열 값
        if (topRow === -1) {
          topRow = i;
        }

        // 가장 왼쪽값과 오른쪽 값을 설정
        if (j < leftCol) {
          leftCol = j;
        }

        if (j > rightCol) {
          rightCol = j;
        }

        // 가장 아래쪽 값을 설정
        bottomRow = i;
      }
    }
  }

  // 이중 for 문 통해서 얻은 값들로 좌표 get

  return [topRow, leftCol, bottomRow + 1, rightCol + 1];
}
