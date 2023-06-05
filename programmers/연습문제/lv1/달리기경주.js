function solution(players, callings) {
  let answer = [...players];

  // Map 을 활용해서 인덱스 효율적으로 관리

  function arrayToMap(arr) {
    const map = new Map();

    arr.forEach((element, index) => {
      map.set(element, index);
    });

    return map;
  }

  const rankMap = arrayToMap(players);

  for (let playerName of callings) {
    const currentRank = rankMap.get(playerName);
    const frontPlayerName = answer[currentRank - 1];
    console.log(frontPlayerName);

    rankMap.set(playerName, currentRank - 1);
    rankMap.set(frontPlayerName, rankMap.get(frontPlayerName) + 1);

    [answer[currentRank - 1], answer[currentRank]] = [
      answer[currentRank],
      answer[currentRank - 1],
    ];
  }

  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // [ 'mumu', 'kai', 'mine', 'soe', 'poe' ]

// 풀이 접근 방식

// map을 이용해서 순위 === index 를 관리한다.(순위를 출력하는 것은 아니므로 index가 0부터 시작인 점에 대해서 보완은 필요없음)
// 테스트 해본 결과, map의 value를 get 해서 특정 변수에 저장해두는 것은 reference 를 저장하는 형태로 동작하는 것이 아니라, value를 저장하는 형태로 동작하는 것을 확인하였음
// 그러므로 순위를 저장해두고, map의 값을 조작해도 문제가 없다.
// 배열도 마찬가지. 변수에 배열/map의 특정 값을 할당하면, 해당 변수는 해당 값을 담고 있지 해당 배열에 대한 참조값을 저장하고 있는 것이 아니다.

const array = [1, 2, 3, 4];

const last = array[3];
const last2 = array[array.length - 1];

// pop을 해서 제거를 해도, 마지막 요소를 5로 변경해도 변수가 선언되고 값이 할당된 시점의 값을 저장하고 있음
// array.pop();
// array[3] = 5;

console.log(last); // 4
console.log(last2); // 4

console.log(array); // [1, 2, 3]
