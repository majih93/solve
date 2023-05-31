// 결혼식

/**
 * 해당 시간에 최대 인원이 필요하다.
 * 최대 인원을 어떻게 알 수 있을까? -> 소거해나가야 하나.
 * 1. 가장 빨리 오는 아이와 가장 늦게 오는 아이를 구한다.
 * 2. 친구들 오는 시간을 어떻게 sort 하는것이 좋을까? -> 오는 시간 순서로 특정 시간에 누군가 몇 명이 있는지 어떻게 알지
 * 가장 무식한 풀이법 -> 모든 시간마다 인원 체크 ( 배열을 줄여가면서 .)
 * 현재 시각에
 */

function mySol(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let currentGuestList;

  currentGuestList = [...arr.sort((a, b) => a[1] - b[1])];

  for (let i = 0; i <= 72; i++) {
    currentGuestList = arr.filter((guest) => {
      // 떠날 시간대가 지금 이후인 경우에만 처리
      return guest[1] > i && guest[0] <= i;
    });

    if (i < 20) {
    }

    if (currentGuestList.length > answer) answer = currentGuestList.length;
  }

  return answer;
}

console.log(
  mySol([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

// 선생님 풀이

// 내 방법은 너무 무식함
// 매번 배열 정렬해야된다는 단점이 있다.

// 선생님 풀이 -> 파티에 누가 오면 ++ 파티에서 누가 떠나면 -- 하는 형태로 구현

function tSol(arr) {
  // // 오는 시간 순서대로 정렬 -> 그러면 일단 시간 순서로 처리할 수가 있다.
  // arr.sort((a, b) => {
  //   if (a[0] === b[0]) return a[1] - b[1];
  //   else return a[0] - b[0];
  // });
  // -> 여기서 정렬할게 아니라 처리한 후에 정렬해야 한다.

  let answer = Number.MIN_SAFE_INTEGER;

  let timeLine = [];
  let currentGuestCount = 0;
  // 시간순서대로 이벤트 담을 배열 처리
  for (let i = 0; i < arr.length; i++) {
    timeLine.push([arr[i][0], "s"]);
    timeLine.push([arr[i][1], "e"]);
  }

  // 정렬, 시간이 같으면, 해당 시간에 떠난 시간이면 해당 사람은 없는 상태이므로 e 부터 처리
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    j;
    return a[0] - b[0];
  });

  console.log(timeLine);

  for (let i = 0; i < timeLine.length; i++) {
    if (timeLine[i][1] === "s") {
      currentGuestCount++;

      if (currentGuestCount > answer) {
        answer = currentGuestCount;
      }
    } else {
      currentGuestCount--;
    }
  }

  return answer;
}

console.log(
  tSol([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
