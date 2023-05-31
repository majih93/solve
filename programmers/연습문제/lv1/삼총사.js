// 삼총사

/**
 * 배열에서 조합할 수 있는 3수를 다 구하고, 해당 배열들의 누적 합이 0인 경우에 대해서 answer++
 */

function solution(number) {
  let answer = 0;
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]);
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  let possibilities = getCombinations(number, 3);

  for (let x of possibilities) {
    if (x.reduce((acc, curVal) => acc + curVal) === 0) answer++;
  }

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
