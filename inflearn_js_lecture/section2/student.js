// 등수 구하기

// 어떻게 문제를 접근해서 풀어야할까

// 입력된 순서대로 등수를 출력...

// 같은 점수는 동일한 등수
// 1등이 3명이면, 2등 점수는 4등처리

// 배열 내림차순으로 정렬해서, 순회하면서 등수기록하고(객체에)
// 중복인 경우에는 count 해서 다음 숫자 등수에 처리할 때 감안하는 형태로 구현

function solution(N, scoreArray) {
  let newArray = [...scoreArray];

  newArray.sort((a, b) => b - a);

  let ranking = {};

  let answer = [];

  let duplicateScores = 0;

  ranking[newArray[0]] = 1;

  for (let i = 1; i < newArray.length; i++) {
    // 이전 점수가 같지 않은 경우
    if (newArray[i - 1] === newArray[i]) {
      duplicateScores++;
    } else {
      ranking[newArray[i]] = i + 1 + duplicateScores;
      duplicateScores = 0;
    }
  }

  for (let x of scoreArray) {
    answer.push(ranking[x]);
  }

  return answer;
}

console.log(solution(5, [87, 89, 92, 100, 76])); // [ 4, 3, 2, 1, 5 ]

// 선생님 풀이

// 이중 for문 돌면서, 해당 분기 요소보다 큰 숫자가 있는 경우 등수 ++ 하는 형태로 처리
