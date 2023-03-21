// 명예의 전당

/**
 *
 * 매번 배열 sort 하는 방식으로 처리
 */

function mySol(k, scores) {
  let answer = [];

  let hallOfFame = [];

  let lastIndex = hallOfFame.length - 1;

  // k 번째 날까지는 숫자 채운다.

  for (let i = 0; i < scores.length; i++) {
    // k번째 날까지는 숫자 채운다.
    if (i < k) {
      hallOfFame.push(scores[i]);

      hallOfFame.sort((a, b) => b - a);

      answer.push(hallOfFame[hallOfFame.length - 1]);
    } else {
      // k번째날 이후부터는 필요한 처리
      if (scores[i] > hallOfFame[hallOfFame.length - 1]) {
        // 꼴지보다 점수가 높으면 명예의 전당 배열에 추가 후,
        hallOfFame.pop();
        hallOfFame.push(scores[i]);

        // 다시 정렬
        hallOfFame.sort((a, b) => b - a);

        answer.push(hallOfFame[hallOfFame.length - 1]);
      } else {
        answer.push(hallOfFame[hallOfFame.length - 1]);
      }
    }
  }

  return answer;
}

console.log(mySol(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(mySol(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
