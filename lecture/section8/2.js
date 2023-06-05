// 재귀함수를 이용해서 십진수 N을 이진수로 변환해서 출력하는 프로그램 작성

// 멈추는 조건: n 이 1
// 2로 나누었을 때 나머지가 1이면 1을 찍고, 아니면 0을 찍는다.
// 나눈 수는 floor 처리한다.
// 가장 마지막에 호출되는 함수의 결과부터 찍혀야 한다는 점

function solution(N) {
  if (N === 0) return;

  solution(Math.floor(N / 2));

  if (N % 2 === 0) console.log(0);
  else console.log(1);
}

solution(11); // 1011

// 개선할 수 있는 포인트

function lecture_solution(N) {
  let answer = "";

  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2)); // parseInt 도 하나의 방법이다.
      answer += n % 2; // 바로 이렇게 처리하면 된다는 점, console.log() 대신에 더하는 처리하면 된다.
    }
  }

  DFS(N);

  return answer;
}

console.log(lecture_solution(11)); // 1011
