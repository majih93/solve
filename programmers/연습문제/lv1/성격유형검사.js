// 성격 유형 검사하기

/**
 * 풀이 전략
 *
 * 문제 풀이 포인트
 *
 * - survey 배열의 각 요소에 대해서 성격유형들이 어떤 순서로 결합되어 있는지에 따라 구분 처리
 * - choices 값을 순서 결합에 따라서 다르게 처리
 *
 * 준비
 * - 각 성격에 대해서 Map 데이터 구조 활용해서 만들어두고 점수 합산
 * - 지표의 각 유형에 대해서 미리 알파벳순으로 저장(같은 경우 처리를 쉽게 하기 위해서)
 * - 1번지표 2번지표 3번 지표 4번 지표 각 지표별로 순서를 내가 미리 정해둬야 한다.
 *
 * 점수 처리
 * - survey 배열을 for 문으로 순회
 * - choices[i] 가 4 인 경우는 그냥 패스
 * - 점수를 구분 -> 4미만 vs 4초과
 * - 4 미만인 경우는 survey[i][0]에 대해서 점수를 합산 (4-choices[i]를 해당 성격에 더해준다.)
 * - 4 초과인 경우에는 survey[i][1]에 대해서 점수를 합산(choices[i] - 4를 해당 성격에 점수 추가 )
 *
 * 정산
 * 각 지표별로 더 높은 숫자를 구한다. -> 더 높은 지표를 answer+=
 *
 * 정산을 어떻게 효율적으로 해볼 수 있을지?
 */

function solution(survey, choices) {
  let answer = "";

  // survey 배열 처리를 쉽게 하기 위해서 8가지로 우선 선언
  let dataMap = new Map([
    [1, { R: 0, T: 0 }],
    [2, { C: 0, F: 0 }],
    [3, { J: 0, M: 0 }],
    [4, { A: 0, N: 0 }],
  ]);

  // 몇 번째 성격유형인지 파악하는 함수
  function getNumber(str) {
    if (str === "RT" || str === "TR") {
      return 1;
    }
    if (str === "CF" || str === "FC") {
      return 2;
    }
    if (str === "JM" || str === "MJ") {
      return 3;
    }
    if (str === "AN" || str === "NA") {
      return 4;
    }
  }

  for (let i = 0; i < survey.length; i++) {
    // 점수가 4인 경우 패스
    if (choices[i] === 4) continue;

    // 4를 기준으로 분기
    if (choices[i] < 4) {
      dataMap.get(getNumber(survey[i]))[survey[i][0]] += 4 - choices[i];
    } else {
      dataMap.get(getNumber(survey[i]))[survey[i][1]] += choices[i] - 4;
    }
  }

  // 정산
  for (const [key, value] of dataMap) {
    if (value[Object.keys(value)[0]] >= value[Object.keys(value)[1]]) {
      answer += Object.keys(value)[0];
    } else {
      answer += Object.keys(value)[1];
    }
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
