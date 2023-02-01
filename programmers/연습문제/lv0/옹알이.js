/**
 * 옹알이
 *
 * 4개의 정해진 발음
 * 각 발음 당 한번만 사용
 * 4가지로 조합이 가능해야함
 * 문자열 배열에서, 발음이 가능한 단어의 개수 return
 */

/**
 * 풀이 전략
 *
 * 다 반복하면서 테스트해보면 될거같음
 * 근데 반복을 줄이려면?
 * 1. 일단 단어 조합이 최소 2여야함 -> 1이면 걸러버려
 * 2. 다 조합해도 10글자임 -> 10글자 초과되는 단어는 걸러버려
 * 3. 3자리 이하인 경우, 각 단어에 해당되지 않는 경우 버려
 * 4. 4자리 이상인 경우, 잘라서 경우의 수에 따라 처리
 *     - 첫 글자 부터 시작해서, 만약 첫 글자가  a 이거나 w 이면 3개 자르고, y이거나 m 이면 2개 잘라
 *     - 그 뒤로도, 남은 글자 수가 2이상인 경우까지 잘르고, 남은게 1이면 버려
 */

const words = ["aya", "yee", "u", "maa", "wyeoo"];

function solution(babbling) {
  let answer = 0;

  // babbling 의 각 단어에 대해서 처리
  for (let i = 0; i < babbling.length; i++) {
    let isRight = true;
    // 단어 길이 1이거나 10 초과하는 경우(나올 수 없는 경우)
    if (babbling[i].length === 1 || babbling[i].length > 10) continue;

    // 3자리 이하인 경우, 일치할 때만 ++
    if (babbling[i].length <= 3) {
      if (
        babbling[i] === "aya" ||
        babbling[i] === "ye" ||
        babbling[i] === "woo" ||
        babbling[i] === "ma"
      ) {
        answer += 1;
        continue;
      }
    }

    // 4자리 이상 10자리 이하인 경우
    // 3자리 문자로 처리해야 하는 경우
    let len = babbling[i].length;

    let startIndex = 0;

    while (len > 0) {
      // 남은 글자수가 1개인 경우 -> 있을 수 없는 경우
      if (len === 1) {
        isRight = false;
        break;
      }
      if (babbling[i][startIndex] === "a" || babbling[i][startIndex] === "w") {
        let temp = babbling[i].substring(startIndex, startIndex + 3);
        if (temp === "aya" || temp === "woo") {
          len -= 3;
          startIndex += 3;
        } else {
          isRight = false;
          break;
        }
      } else {
        // 2자리 문자로 처리해야 하는 경우
        let temp = babbling[i].substring(startIndex, startIndex + 2);
        if (temp === "ye" || temp === "ma") {
          len -= 2;
          startIndex += 2;
        } else {
          isRight = false;
          break;
        }
      }
    }
    if (isRight) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
// console.log(solution(["yemawoo"]));

// 첫 번째 제출 - 실패
// node 환경에서 돌려보면 결과값이 안나옴

// 두 번째 제출 - 성공

// 실패 요인

// 1. while loop 조건을 제대로 걸지 않아서 infinite loop 발생 -> continue로 처리하지 말았어야 한다.
// 2. startIndex 값으로 반복문에서 문자열 탐색했ㄷ어야했느넫 계속 0번째 인덱스 참조해서 결과를 얻지 못했음
// 3. 중첩 반복문에서 continue 는 inner 에만 해당된다.
