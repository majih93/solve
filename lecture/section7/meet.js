// 회의실 배정

/**
 * 현재 회의 중 끝나는 시간이 가장 빠른 회의를 고른다(시작 시간이 현재 이후인 상황에서.)
 * -> 반복 분기는 어떻게 설정해야 하는지?
 *
 */

function mySol(arr) {
  let answer = 1; // 1개는 무조건 추가하고 시작

  let currentTime = arr.sort((a, b) => a[1] - b[1])[0][1]; // 마지막으로 회의 끝난 시간

  let newArray; // 매 반복마다 남은 가능성들 담을 배열( 탐색 줄이기 위해서 )

  while (true) {
    // 끝난 시간보다 시작시간이 크거나 같은 회의 스케줄 배열로 가능성 범위 줄이고
    newArray = arr.filter((schedule) => {
      return schedule[0] >= currentTime;
    });

    console.log(newArray);

    // 가능성 배열 하나도 없으면 break
    if (newArray.length === 0) break;

    // 있으면, 순회하면서 가장 끝나는 시간이 빠른 회의 찾아서, 해당 회의로 설정하고 answer++
    currentTime = newArray.sort((a, b) => a[1] - b[1])[0][1];

    answer++;
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
); // 3

// 선생님 풀이

// 내가 놓친 케이스가 있음
// -> 끝나는 시간이 동일한 케이스는?
// 1,3 -> 3,3 이런 전개도 가능하므로, 그때는 시작시간이 빠른 순으로 sort 해서 처리하는 것이 최적의 선택이 된다.

function tSol(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    // 끝나는 시간이 같은 회의에 대해서는 시작 시간 빠른 순으로 정렬
    else return a[1] - b[1];
  });

  let entTime = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      // 근데 이게 어떻게 최적의 해를 보장하지? -> 되지. 끝나는 시간이 빠른 애순으로 정렬하고, 이전의 종료시간과 현재 시작시간이 크거나 같은 경우에 가장 빠르게 끝나는 회의가 시작되니까 이렇게 되면
      answer++;
      et = x[1];
    }
  }
}

console.log(
  tSol([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // 3]
