// 큰 수 출력하기

// 배열을 순회하면서 하나 작은 인덱스 값보다 크면 결과 배열에 push

const array = [7, 3, 9, 5, 6, 12];

function solution(N, arr) {
  let answer = [];

  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution(6, array)); // [ 7, 9, 6, 12 ]

// 선생님 풀이 -> 같은 방식으로 푸심
