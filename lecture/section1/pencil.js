// N명의 학생에게 연필을 나누어 주기 위해 필요한 다스 수를 계산하려면
// N 이 12의 배수인 경우 -> N/12 의 몫이 필요한 다스 수
// N 이 12의 배수가 아닌 경우 -> N/12의 몫 + 1 이 필요한 다스 수

// 최초 풀이
function solution(N) {
  let answer;

  if (N % 12 === 0) {
    answer = N / 12;
  } else {
    answer = N / 12 + 1;
  }

  return answer;
}

console.log(solution(25)); // 3.083333...

// 틀렸음
// -> 12의 배수가 아닌 경우, 나눗셈의 결과가 아니라 몫을 통해서 처리를 해야했다.

// js 에서 몫을 구하는 방법
// -> 나눈 결과를 소수부분을 버리면 되지 않을까?
// -> parseInt 함수는 원래 문자열을 숫자로 변경하기 위해서 사용됨(문서에보면, 문자열을 받아 정수를 반환한다고 되어 있다.)
// 문자열 인자를 파싱하여 특정 진수의 정수를 반환한다.

// 문자열 값이 아닌 값이 전달되는 경우, toString을 통해 문자열로 변환해서 처리함

// 시도2. parseInt 를 통해 몫을 구하도록 처리
function solution2(N) {
  let answer;

  if (N % 12 === 0) {
    answer = N / 12;
  } else {
    answer = parseInt(N / 12) + 1;
  }

  return answer;
}

console.log(solution2(25)); // 3
console.log(solution2(178)); // 15

// 강사님 풀이
// 나눠서 딱 떨어지지 않으면 무조건 + 1을 한다는 점에서, 소수점을 올림처리 하면 정답이 보장된다는 점을 활용하셨음

function lecture_solution(N) {
  let answer = Math.ceil(N);

  return answer;
}

// Math.ceil 함수는 올림 처리를 하는 함수
