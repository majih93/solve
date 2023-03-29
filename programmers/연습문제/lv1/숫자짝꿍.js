// 숫자짝꿍

/**
 * 풀이 전략
 *
 * - 주의할 점
 * - String 으로 반환해야한다는점
 * - 0으로 이루어진 케이스
 * - 짝꿍이 없는 케이스
 *
 * - X 에 대해서 각 숫자를 key, 등장 횟수를 value 로 하는 Map 에 저장
 * - Y 순회하면서 해당 숫자가 Map 에 존재하면 짝꿍 목록 배열에 추가 (Map 에서 value--)
 * - 모든 숫자가 0인 경우 0을 반환해야하는데 이는 정렬 전에 처리하는 것이 나을 듯(0 이 아닌 숫자가 짝꿍 목록에 추가되는 경우를 저장할 변수로 처리
 * - Y 순회 종료 후 짝꿍 숫자 배열이 비어있는 경우 "-1" 반환
 * - 짝꿍 숫자 배열이 비어있지 않은 경우, 내림차순 sort 한 후 join 한 값을 return
 *
 * 고민한 부분
 * - 둘 중 더 짧거나 긴 숫자 문자열을 Map 에 저장하는 것에 대해 고민하는 것이 의미가 있는지?
 * -> 결과는 달라지지 않음.
 * -> 어차피 각 숫자 문자열의 모든 요소를 한번씩은 탐색해야 한다.
 */

function solution(X, Y) {
  let answer = "";

  let coupleNumbers = [];
  let isEveryNumberZero = true;

  let xMap = new Map();

  for (let x of X) {
    if (xMap.has(x)) {
      xMap.set(x, xMap.get(x) + 1);
    } else {
      xMap.set(x, 1);
    }
  }

  for (let y of Y) {
    if (xMap.has(y)) {
      // 0 이 아닌 숫자가 더해지는 경우를 관리(0으로만 이루어진 배열인 경우를 관리하기 위해)
      if (y !== "0") {
        isEveryNumberZero = false;
      }

      if (xMap.get(y) === 1) {
        coupleNumbers.push(y);
        xMap.delete(y);
      } else {
        coupleNumbers.push(y);
        xMap.set(y, xMap.get(y) - 1);
      }
    }
  }

  if (coupleNumbers.length === 0) return "-1";

  if (isEveryNumberZero) return "0";

  coupleNumbers.sort((a, b) => b - a);
  answer = coupleNumbers.join("");

  return answer;
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));

// 굳이 everyNumber가 0 인것을 변수로 따로 잡아서 확인하지 않아도, 정렬 후에 0번째 인덱스 값이 0이면 배열이 0으로만 이루어져있다고 생각해서 처리해도 된다.
