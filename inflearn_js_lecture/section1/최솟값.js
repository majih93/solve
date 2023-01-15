// 문제는 강의 자료 참고

// 최초 풀이 도전

function solution(A, B, C) {
  let answer = Number.MIN_SAFE_INTEGER;

  answer = A;

  // 비교 통해서 숫자가 더 작으면 answer 교체
  if (answer > B) {
    answer = B;
  }

  if (answer > C) {
    answer = C;
  }

  return answer;
}

console.log(solution(2, 5, 11)); // 5

// 강사님 풀이 대비 내가 놓친 부분

function lecture_solution(a, b, c) {
  // 나는 일단 A 로 할당하고 시작했는데, 할당하지 않고 선언
  let answer;

  // 두 수를 먼저 비교해서, 더 작은 값을 answer 에 할당
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

// 굳이 특정 값으로 answer 를 할당해서 시작할 필요 없이, 비교해서 작은 수를 할당하는 방식으로 한 단계를 줄일 수 있음(사고 방식 측면에서)
