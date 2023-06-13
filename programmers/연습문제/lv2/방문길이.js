function solution(dirs) {
  let answer = 0;

  // 지나간 경로 기록하는 데이터구조
  let pathMap = new Map();

  // 현재 포지션
  let position = [0, 0];

  // 움직임에 대한 결과위치값 구하는 함수
  function move(curPosition, dir) {
    const copiedArr = [...curPosition];

    if (dir === "U") copiedArr[1]++;
    if (dir === "D") copiedArr[1]--;
    if (dir === "R") copiedArr[0]++;
    if (dir === "L") copiedArr[0]--;

    if (copiedArr[0] > 5 || copiedArr[0] < -5) return [];
    if (copiedArr[1] > 5 || copiedArr[1] < -5) return [];

    return copiedArr;
  }

  for (let dir of dirs) {
    // 새로운 위치
    const newPosition = move(position, dir);

    // 좌표평면 넘어가는 명령 무시
    if (newPosition.length === 0) continue;

    // map 관련 처리 위해서 key 처리
    const key1 = "" + position[0] + position[1];
    const key2 = "" + newPosition[0] + newPosition[1];

    // map에 기록이 없으면 처음 가보는길.
    if (!(pathMap.get(key1) === key2)) {
      pathMap.set(key1, key2);
      pathMap.set(key2, key1);
      answer++;
    }

    console.log(`${position} => ${newPosition}`);

    position = newPosition;
  }

  console.log(pathMap);

  return answer;
}

// console.log(solution("LULLLLLLU"));
console.log(solution("ULURRDLLU"));

// 아하! 위 기존 풀이는 key 값이 변경되는 케이스를 전혀 고려하지 않음
// unique 키값이 아니다!
// unique 키값이 되려면, 한번에 다 합쳐서 처리해야 함

function solution_2(dirs) {
  let answer = 0;

  // 지나간 경로 기록하는 데이터구조
  let pathMap = new Map();

  // 현재 포지션
  let position = [0, 0];

  // 움직임에 대한 결과위치값 구하는 함수
  function move(curPosition, dir) {
    const copiedArr = [...curPosition];

    if (dir === "U") copiedArr[1]++;
    if (dir === "D") copiedArr[1]--;
    if (dir === "R") copiedArr[0]++;
    if (dir === "L") copiedArr[0]--;

    if (copiedArr[0] > 5 || copiedArr[0] < -5) return [];
    if (copiedArr[1] > 5 || copiedArr[1] < -5) return [];

    return copiedArr;
  }

  for (let dir of dirs) {
    // 새로운 위치
    const newPosition = move(position, dir);

    // 좌표평면 넘어가는 명령 무시
    if (newPosition.length === 0) continue;

    // map 관련 처리 위해서 key 처리
    const key1 =
      "" + position[0] + position[1] + newPosition[0] + newPosition[1];
    const key2 =
      "" + newPosition[0] + newPosition[1] + position[0] + position[1];

    // map에 기록이 없으면 처음 가보는길.
    if (!pathMap.get(key1) && !pathMap.get(key2)) {
      pathMap.set(key1, 1);
      pathMap.set(key2, 1);
      answer++;
    }

    position = newPosition;
  }

  return answer;
}

console.log(solution_2("ULURRDLLU"));
