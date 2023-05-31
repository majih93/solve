// 문자열 나누기

/**
 * 풀이 전략
 *
 *
 *
 */

function mySol(s) {
  let answer = 0; // 최소 1개는 문자열이 있어야 하고, 분리횟수를 더해주면 + 1 이 문자 개수이므로 1로 초기화

  let currentX = ""; // 현재 기준 문자 담을 변수
  let countX = 0; // 현재 기준 문자 갯수 담을 변수
  let countNotX = 0; // 현재 기준 문자와 다른 문자 갯수 담을 변수

  for (let letter of s) {
    // 기준 문자 없는 경우 -> 해당 문자가 최초의 기준 문자가 되어야 함
    if (currentX === "") {
      currentX = letter;
      countX++;
    } else {
      // 기준 문자 존재하는 경우
      if (letter === currentX) {
        // 기준문자와 이번 문자 같은 경우
        countX++;

        // 더해준 후에 갯수가 같으면 자르는 처리
        if (countX === countNotX) {
          answer++;
          currentX = "";
          countX = 0;
          countNotX = 0;
        }
      } else {
        countNotX++;

        // 더해준 후에 갯수가 같으면 자르는 처리
        if (countX === countNotX) {
          answer++;
          currentX = "";
          countX = 0;
          countNotX = 0;
        }
      }
    }
  }

  // 다 돌고 나서 둘다 일치하지 않게 끝났으면 answer++
  if (countNotX !== countX) {
    answer++;
  }

  return answer;
}

console.log(mySol("banana"));
console.log(mySol("abracadabra"));
console.log(mySol("aaabbaccccabba"));

// 실패

// 뭘 놓치고 있을까?

// 자르고 처리되는 횟수를 잘 못 생각했음
// -> 마지막에 반복문 마무리 된 후에, 깔끔하게 처리가 안된 경우남아잇는 문자열을 더해주는 식으로 처리했어야 한다.
