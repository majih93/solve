// 가장 짧은 문자 거리

// 문자열의 각 문자가 주어진 문자와 거리가 얼마나 떨어져 있는지, 각 문자에 대해서 출력

// 한 번은 앞에서 뒤로, 한 번은 뒤에서 앞으로 가면서,

// 해당 문자가 등장하면 특정 값을 0으로 초기화, 아니면 ++ 해서 배열에 저장

// 각 숫자가 앞에서 탐색한 경우는 왼쪽에 있는 문자로부터의 거리, 뒤에서 탐색한 경우에는 오른쪽에 있는 문자로부터의 거리를 나타내겟지.

// 두 배열을 비교하면서, 더 작은 숫자를 결과값으로 처리하면 되겠다.

function solution(str, char) {
  let answer = [];
  // 거리 처리하기 위한 변수
  // 문자열 길이 - 1로 초기화 해서 최대 거리로 표시
  let distance = str.length - 1;

  //앞에서 부터 탐색해서 결과값 담을 배열
  let fromFront = [];

  // 뒤에서부터 탐색해서 결과값 담을 배열
  let fromBack = [];

  // 앞에서부터 탐색
  for (let i = 0; i < str.length; i++) {
    // 해당 문자가 기준 문자인 경우, 0으로 초기화
    // 해당 문자가 기준 문자가 아닌 경우, distance ++
    if (str[i] === char) {
      distance = 0;
    } else {
      distance++;
    }

    // 결과 배열에 push
    fromFront.push(distance);
  }

  // 뒤에서부터 탐색
  for (let i = 0; i < str.length; i++) {
    // 해당 문자가 기준 문자인 경우, 0으로 초기화
    // 해당 문자가 기준 문자가 아닌 경우, distance ++
    if (str[str.length - i - 1] === char) {
      distance = 0;
    } else {
      distance++;
    }

    // 결과 배열에 push
    fromBack.unshift(distance);
  }

  // distance 값 초기화 필요
  distance = str.length - 1;

  // 두 배열의 각 값 비교해서, 작은 값을 결과 배열에 push
  for (let i = 0; i < str.length; i++) {
    if (fromFront[i] >= fromBack[i]) {
      answer.push(fromBack[i]);
    } else {
      answer.push(fromFront[i]);
    }
  }

  return answer;
}

console.log(solution("teachermode", "e")); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

// 선생님 풀이

// 비슷하게 푸심

// 내 답은 3n 의 탐색이 필요한데, 값을 answer 에 할당하는 처리를 두 번째 배열탐색에서 같이 처리를 해도 됨.
// 해당 처리에서 distance 값과, 해당 인덱스의 fromFront 배열값을 비교해서 더 작은 값을 push 하면 굳이 fromBack 배열이 필요하지도 않다. 더 효율적으로 처리할 수 있는 방법에 대해서 고민이 필요함
