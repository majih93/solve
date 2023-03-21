// 과일 장수
// arr.splice(startIndex, lastIndex) -> 원본 배열 변경하고, startIndex ~ lastIndex-1 까지의 값이 담긴 배열을 반환

// function mySol(k, m, score) {
//   let answer = 0;

//   // 큰 점수 순으로 sort
//   score.sort((a, b) => b - a);

//   // 남아있는 사과 개수가 상자에 담을 숫자보다 크거나 같은 경우 계속 반복
//   while (score.length >= m) {
//     // 일단 앞에서 m 개 만큼 자름
//     let tempArr = [];

//     for (let i = 0; i < m; i++) {
//       tempArr.push(score.shift());
//     }

//     // 자른 배열의 마지막 값(정렬된 배열에서 잘랐으므로 최소값임이 보장됨) * 사과갯수를 answer++
//     answer += tempArr[tempArr.length - 1] * m;
//   }

//   return answer;
// }
// 시간 초과 실패 케이스가 생기네. -> 실패

//일단 굳이 배열로 처리할 필요가 없이 각 분기별로 마지막 숫자만 알면 된다.

function mySol(k, m, score) {
  let answer = 0;

  // 큰 점수 순으로 sort
  score.sort((a, b) => b - a);

  // 얼마나 탐색할지 정하기 위해서 배열 길이 저장
  let appleCount = score.length;

  // 최소값 찾기 위해서 인덱스값 저장할 변수
  let currentLastIndex = 0;

  // 사과가 m 개 이상이면 반복
  while (appleCount >= m) {
    // 갯수만큼 인덱스 더해가면서 처리
    currentLastIndex += m;

    // 해당 반복 분기에서 최저 사과 값에 따른 이익 답에 추가
    // index 이므로 -1 처리해주어야 함
    answer += score[currentLastIndex - 1] * m;

    // 남은 사과 개수 차감
    appleCount -= m;
  }

  return answer;
}

console.log(mySol(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(mySol(3, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

// 다른 답에 보니까, 버릴 사과 개수를 애초에 정해서 사과 상자개수를 미리 정리하는 것도 있던데, 이것도 필요할 수 있는 접근법이다.
