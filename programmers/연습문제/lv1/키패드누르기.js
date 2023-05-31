// 키패드 누르기

/**
풀이 전략
- 문제 풀이 키 포인트: 숫자가 2,5,8,0 인 경우 각 손가락이 현재 위치한 숫자로부터 해당 숫자까지의 거리를 계산하는 알고리즘 짜기
- Map 을 활용해서 각 숫자별 좌표 저장하고, 좌표값으로 거리 계산
- 행과 열 값의 차이의 절대값 끼리 더한것이 거리 -> 거리 구하는 함수를 따로 구현하고, "L" or "R"을 맞춰서 반환하도록 구현
- 함수 내에서 문제 조건에 맞도록 처리한다. (거리가 일치하는 경우 왼손잡이는 왼손, 오른손잡이는 오른손으로 누르는 부분 처리필요)
 */

function solution(numbers, hand) {
  let answer = "";

  let leftKey = "*";
  let rightKey = "#";

  let leftKeyArr = [1, 4, 7];
  let rightKeyArr = [3, 6, 9];

  // 숫자별 좌표 저장
  let keypadMap = new Map([
    [1, [0, 0]],
    [2, [0, 1]],
    [3, [0, 2]],
    [4, [1, 0]],
    [5, [1, 1]],
    [6, [1, 2]],
    [7, [2, 0]],
    [8, [2, 1]],
    [9, [2, 2]],
    ["*", [3, 0]],
    [0, [3, 1]],
    ["#", [3, 2]],
  ]);

  // 거리 계산 로직 분리
  function calculateDistance(nextKey) {
    // 왼쪽 손 위치
    let leftPosition = keypadMap.get(leftKey);
    // 오른쪽 손 위치
    let rightPosition = keypadMap.get(rightKey);

    // 이번에 누르려는 키 위치
    let nextKeyPosition = keypadMap.get(nextKey);

    // 거리는 x좌표와 y좌표 각각의 차이의 절대값을 더한것과 같음
    // 왼손으로부터 거리
    let leftDistance =
      Math.abs(leftPosition[0] - nextKeyPosition[0]) +
      Math.abs(leftPosition[1] - nextKeyPosition[1]);

    // 오른손으로부터 거리
    let rightDistance =
      Math.abs(rightPosition[0] - nextKeyPosition[0]) +
      Math.abs(rightPosition[1] - nextKeyPosition[1]);

    // 같은 경우
    if (rightDistance === leftDistance) {
      if (hand === "left") return "L";
      return "R";
    } else if (rightDistance > leftDistance) {
      return "L";
    } else {
      return "R";
    }
  }

  for (let x of numbers) {
    if (leftKeyArr.includes(x)) {
      answer += "L";
      leftKey = x;
    } else if (rightKeyArr.includes(x)) {
      answer += "R";
      rightKey = x;
    } else {
      let nextHand = calculateDistance(x);

      // 함수 반환결과 처리
      answer += nextHand;

      // 해당 키 누른 손가락의 값 갱신
      if (nextHand === "L") leftKey = x;
      else rightKey = x;
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // LRLLLRLLRRL - 예상한 결과 맞음
