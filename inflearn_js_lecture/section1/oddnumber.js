// 최초 풀이
const array = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  let oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddArr.push(arr[i]);
    }
  }

  oddArr.sort((a, b) => a - b); //

  return oddArr[0];
}

console.log(solution(array)); // 41

// 강사님 풀이

// 일단, 문제를 똑바로 읽지 않았음

// 홀수들의 합과, 그 중 최소값을 출력하라는 문제였는데 최소값만 구했다.

// 문제를 잘 읽는게 모든 일의 시작이다.

// 그리고, 하나의 반복문으로 최소값과 합을 한꺼번에 구할 수 있음

function solution2(array) {
  let sum = 0;

  // 최소값을 담을 변수
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sum += array[i];

      if (array[i] < min) {
        min = array[i];
      }
    }
  }

  console.log(sum);
  console.log(min);
}

solution2(array); // 256  41
