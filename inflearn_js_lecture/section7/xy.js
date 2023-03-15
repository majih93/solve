// 좌표 정렬

/**
 * 풀이 전략
 *
 * 어떤 자료구조를 활용해서 문제를 푸는 것이 효율적일지?
 *
 * Map -> 입력된 순서 보장
 * -> sort 조건을 맵의 키를 확인하고, 같은 경우 key 의 value 를 확인해서 작은 값을 큰 값으로 정렬하는 형태로 구현해보자.
 *
 * 삽입정렬 case, 버블정렬 case, 선택정렬 case 를 따져서 처리해보자.
 */

// 버블 정렬 case
function mySol(arr) {
  // let xyHashMap = new Map();
  // 계획할 때랑 다르게, 생각이 바뀜. 굳이 Map 이고 뭐고 그냥 배열 정렬하는 느낌으로 인덱스 써서 하면 되지 않나?

  let answer = arr;

  // 버블 정렬 case -> 바로 뒷자리와 비교해서 더 크면 바꾸고 더 작으면 Pass
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 뒷자리는 매 반복마다 한자리씩 정해지니까, 범위를 줄여야 한다.
      // 0 번째에는 뒤에서 하나까지 가야하고,
      // 1 번째에는 탐색범위 1개 줄어있고..등등
      // x 좌표값이 같은 경우

      if (arr[j][0] === arr[j + 1][0]) {
        console.log("같은 경우", j, j + 1);
        if (arr[j][1] > arr[j + 1][1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      } else {
        if (arr[j][0] > arr[j + 1][0]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }

      // console.log(j, j + 1);
      if (i === 0 && j === 0) {
        console.log(answer);
        console.log(arr[j][1], arr[j + 1][1]);
      }
    }

    // console.log(answer);
  }

  return answer;
}

console.log(
  mySol([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);

// 실패, x값에 따른 정렬은 잘 되었는데, 마지막 부분이 정렬이 안됐음
// j 도 마찬가지로 0부터 돌아야 한다.
// i는 각 자리가 확정되는 만큼의 횟수이고,
// j 는 각 반복 분기가 시작되는 지점이다.

// 선생님 풀이

/**
 * 풀이전략
 *
 * sort 조건을 조금 세분화 해서 푸는 형태로 가셨음
 */

function tSol(arr) {
  let answer = arr;

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

console.log(
  tSol([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
