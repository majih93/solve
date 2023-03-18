// 점수계산

// for 문 돌면서, 채점 결과에 따라서 더해줄 값 담을 변수랑, 총점 담을 변수 두개 활용해서 문제 풀어보면 될 듯

// 배열에서, 이전의 값이 0인 경우

function solution(numberOfQuestions, testResultArray) {
  let sum = 0;

  let consecutive = 1;

  if (testResultArray[0] === 1) sum++;

  for (let i = 1; i < numberOfQuestions; i++) {
    // 만약에 해당 반복분기의 값이 1이라면 === 처리가 필요한 값이라면
    if (testResultArray[i] === 1) {
      // 이전 분기 1이면?
      if (testResultArray[i - 1] === 1) {
        consecutive++;
        sum += consecutive;
      } else {
        consecutive = 1;
        sum += consecutive;
      }
    }
  }
  return sum;
}

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // 10

// 조건 분기 치는 연습 좀 많이 해야될 듯 하다.
