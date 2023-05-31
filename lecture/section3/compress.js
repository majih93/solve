// 문자열 압축

/**
 * 문자가 연속 반복되는 경우, 해당 문자 오른쪽에 반복횟수를 표시하는 형태로 문자열 압축
 * 1인 경우 숫자를 생략
 */

/**
 * 풀이 전략
 *
 * 문자열 각 인덱스 값에 대해서,
 * 다음 인덱스 값이 일치하면 counter++
 * 일치하지 않으면 결과 문자열에 해당 문자 및 counter 값 더해주고, counter 1로 초기화
 * counter 1이면 추가하지 않아야한다.
 * 마지막 인덱스인 경우에도, 다음 인덱스 값이랑 비교하면 됨(undefined 와 문자 비교이므로 일치하지 않는 케이스로 같이처리할 수 있다)
 * 근데 첫 번째 인덱스 값인경우 불일치라고 해서 무조건 때려버리면 안되는디.
 */

function solution(str) {
  let answer = "";

  let duplicateCount = 1;

  for (let i = 0; i < str.length; i++) {
    // 0번째 인덱스 값에 대해서는 따로 처리
    if (i === 0) {
      if (str[1] != str[0]) {
        answer += str[0];
      } else {
        // 두 번째가 같은 경우 counter만 ++
        duplicateCount++;
      }
    } else {
      // 0이 아닌 인덱스인 경우에 대한 일반적인 처리
      // 다음 인덱스값이 동일한 경우
      if (str[i] === str[i + 1]) {
        if (str[i] === "S") {
          console.log(duplicateCount);
        }
        duplicateCount++;
      } else {
        // 동일하지 않은 경우
        // 현재 문자와, duplicateCount가 1이 아닌 경우 duplicateCount를 정답 문자열에 추가
        if (duplicateCount != 1) {
          answer += str[i];
          answer += String(duplicateCount);
        } else {
          answer += str[i];
        }

        duplicateCount = 1;
      }

      // counter 변수 초기화
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));

// 변수 초기화 위치 제대로 잡아야 한다.
// 시간 아끼려면 조금 더 조심스럽게 계획해야할듯

// 선생님 풀이

// 일단, 다음 문자가 같은 문자인지 확인하는 방법으로 처리하면 굳이 첫 번째 인덱스 처리가 따로 필요없음
// 그리고 조건문을 개선할 포인트들이 있음
function teacherSolutionReflected(str) {
  let answer = "";

  let duplicateCount = 1;

  for (let i = 0; i < str.length; i++) {
    // -> 0번째 인덱스 굳이 필요가 없어 처리가.
    // 0번째 인덱스 값에 대해서는 따로 처리
    // if (i === 0) {
    //   if (str[1] != str[0]) {
    //     answer += str[0];
    //   } else {
    //     // 두 번째가 같은 경우 counter만 ++
    //     duplicateCount++;
    //   }
    // } else {
    // 0이 아닌 인덱스인 경우에 대한 일반적인 처리
    // 다음 인덱스값이 동일한 경우
    if (str[i] === str[i + 1]) {
      duplicateCount++;
    } else {
      // 동일하지 않은 경우
      // 현재 문자와, duplicateCount가 1이 아닌 경우 duplicateCount를 정답 문자열에 추가
      // if (duplicateCount != 1) {
      //   answer += str[i];
      //   answer += String(duplicateCount);
      // } else {
      //   answer += str[i];
      // }

      // 위처럼 전체를 조건식으로 묶는게 아니라, 필요한 로직에 대해서만 조건 확인
      answer += str[i]; // 문자는 무조건 더하는 것
      if (duplicateCount > 1) answer += String(duplicateCount); // 1보다 큰 경우에만 더하는 조건식으로 얘만 검사하면 됨

      duplicateCount = 1;
    }

    // counter 변수 초기화
    // }
  }

  return answer;
}
