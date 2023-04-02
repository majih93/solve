// 추억 점수

/**
 * 풀이 전략
 *
 * name: yearning 으로 이루어진 배열 만들고, photo 각 요소에 대해서 순회하면서 Map 에 이름 존재하는 경우 해당 점수 더하는 형태로 해결
 */

function solution(name, yearning, photo) {
  let answer = [];

  let yMap = new Map();

  for (let i = 0; i < name.length; i++) {
    yMap.set(name[i], yearning[i]);
  }

  for (let x of photo) {
    let sum = 0;
    for (let y of x) {
      if (yMap.has(y)) {
        sum += yMap.get(y);
      }
    }
    answer.push(sum);
  }

  return answer;
}
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
