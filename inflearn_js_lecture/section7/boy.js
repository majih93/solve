// 장난꾸러기 현수

/**
 * 풀이 전략
 */

function mySol(array) {
  let answer = [];
  let sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  let hyunsooIndex;

  // 불일치 하는 값 === 현수 현재 위치 파악
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortedArray[i]) {
      answer.push(i + 1);
      hyunsooIndex = i;
      break;
    }
  }

  // 현수앞으로 배열 잘라버리기
  array.splice(0, hyunsooIndex);

  let minValueIndex = 1;
  let minValue = array[1];
  // 해당 배열에서 1번째 인덱스부터 검색 -> 최소값 찾기
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValueIndex = i;
    }
  }

  // 자른 개수만큼 더해줘야한다
  answer.push(minValueIndex + 1 + hyunsooIndex);

  return answer;
}

console.log(mySol([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3, 8
console.log(mySol([120, 130, 150, 150, 130, 150])); // 3, 5

// 선생님 풀이

/**
 * 아 수업 들으면서 깨달았다..
 * 애초에 비교한 후에 자를 필요가 없이, 정렬된 배열과 현수가 이상하게 서있는 배열 비교하면서 불일치 인덱스 그냥 배열에 넣어서 반환하면 자연스럽게 현수 - 친구 순으로 번호 알 수 있네...히히..
 */

function tSol(arr) {
  let answer = [];
  let sortedArray = [...arr];
  sortedArray.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArray[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(tSol([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(tSol([120, 130, 150, 150, 130, 150]));
