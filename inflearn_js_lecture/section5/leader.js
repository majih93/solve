/**
 * A,B,C,D,E 가 출마했는데, 이 중 누가 학급 회장으로 뽑혔는지 파악하는 알고리즘 개발
 *
 */

// 객체 활용해서 풀어볼까 했는데 정확하게 모르겠음
// function solution(picks) {
//   let result = { A: 0, B: 0, C: 0, D: 0, E: 0 };

//   for (let x in picks) {
//     // -> in vs of
//     console.log(picks[x]);

//     result.picks[x] = result.picks[x] + 1;
//   }

//   let answer = _.max(Object.keys(result), (o) => obj[o]);

//   return answer;
// }

// console.log(solution("BACBACCACCBDEDE"));

// 선생님 풀이

// JavaScript 의 Map 을 이용해서 해쉬를 구현해서 풀어보자.

function teacherSolution(s) {
  let answer;

  let sH = new Map(); // Map?

  for (let x of s) {
    if (sH.has(x)) {
      // sH 에 x키값이 있다면
      sH.set(x, sH.get(x) + 1); // sH.set(키값, newValue)
    } else {
      sH.set(x, 1);
    }
  }

  console.log(sH); // Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of sH) {
    // key value 값이 각각 변수에 대응할당된다.
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

console.log(teacherSolution("BACBACCACCBDEDE")); // C
