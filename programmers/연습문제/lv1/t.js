// 최소직사각형

// 큰 수 / 작은 수에 대해서 각각 분리하고, 큰 수 중 가장 큰 수 * 작은 수 중 가장 큰 수 로 처리하면 될 듯

function solution(sizes) {
  let answer = 0;

  let bigMax = 0;
  let smallMax = 0;

  for (let x of sizes) {
    if (x[0] === x[1]) {
      if (x[0] > bigMax) bigMax = x[0];
      if (x[0] > smallMax) smallMax = x[1];
    } else {
      // const tempArr = x.sort();
      // 그냥 sort 하면 유니코드 순으로 정렬되므로 원하는대로 처리되지 않는다.
      const tempArr = x.sort((a, b) => a - b);

      if (tempArr[0] > smallMax) smallMax = tempArr[0];
      if (tempArr[1] > bigMax) bigMax = tempArr[1];
    }
  }

  answer = bigMax * smallMax;

  return answer;
}

// 실패함
// 놓친 부분이 무엇일까?
// sort 는 숫자를 제대로 정렬해주지 않는 케이스가 존재한다는 점!!

const case1 = [[3, 4]];

console.log(solution(case1));
