// 삼각형이 될려면, 가장 긴 변을 제외한 두 변 길이의 합이 가장 긴 변보다 길어야함

// 최초 풀이
function solution(A, B, C) {
  let total = A + B + C;

  let answer;

  let temp;

  // 가장 큰 숫자(긴 변)을 제외한 나머지 두 수 파악
  if (A > B) {
    temp = A;
  } else {
    temp = B;
  }

  if (C > temp) {
    temp = C;
  }

  // 전체 더한 값에서 제일 큰 변을 뺀 값이 제일 큰 변보다 작으면 no, 크면 YES
  if (total - temp > temp) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO

// 강사님 풀이와 비슷하게 풀었음
