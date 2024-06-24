// 정수 삼각형

// 아래 주석처리된 해결법으로는 풀리긴하는데 시간초과가 떠서, 개선 포인트를 찾다가 마지막에 answer에 Math.max를 하지 않고(다시 배열을 순회해야함) 매번 변수 하나를 업데이트하는 형태로 풀었다.
function solution(triangle) {
  let answer = 0;

  let prevMax = [0]; // 이전 level각 요소들까지 다다르는 합 중 최대값 담을 배열, 처음에는 0 하나를 담는 형태로 초기화

  let max = 0;

  // 각 레벨의 배열에 대해서 for문을 돌린다.
  for (const curLv of triangle) {
    const curMax = [];
    // for문 돌면서 바로 위 인접 요소 2개 중 최대값에 자신을 더한 값을 저장
    for (let i = 0; i < curLv.length; i++) {
      // 맨앞 맨뒤는 따로 처리
      if (i === 0) {
        const toAdd = prevMax[i] + curLv[i];
        curMax.push(toAdd);
        if (toAdd > max) max = toAdd;
      } else if (i === curLv.length - 1) {
        const toAdd = prevMax[prevMax.length - 1] + curLv[i];
        curMax.push(toAdd);
        if (toAdd > max) max = toAdd;
      } else {
        const toAdd = Math.max(prevMax[i - 1], prevMax[i]) + curLv[i];
        // 위 둘 요소는 각각 prevMax[i-1], prevMax[i]에 해당된다(삼각형 형태 상 일관된 규칙임)
        curMax.push(toAdd);
        if (toAdd > max) max = toAdd;
      }

      // 다음 분기를 위해서 prevMax 이번 배열로 교체
    }
    prevMax = [...curMax];
  }

  // 이거 약간 그거 아닌가?
  // 작은 문제 해결해서 큰 문제 가는거.
  answer = max;

  return answer;
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

// function solution(triangle) {
//   let answer = 0;

//   let prevMax = [0]; // 이전 level각 요소들까지 다다르는 합 중 최대값 담을 배열, 처음에는 0 하나를 담는 형태로 초기화

//   // 각 레벨의 배열에 대해서 for문을 돌린다.
//   for (const curLv of triangle) {
//     const curMax = [];
//     // for문 돌면서 바로 위 인접 요소 2개 중 최대값에 자신을 더한 값을 저장
//     for (let i = 0; i < curLv.length; i++) {
//       // 맨앞 맨뒤는 따로 처리
//       if (i === 0) {
//         if (i === 0) curMax.push(prevMax[i] + curLv[i]);
//       } else if (i === curLv.length - 1) {
//         if (i === curLv.length - 1)
//           curMax.push(prevMax[prevMax.length - 1] + curLv[i]);
//       } else {
//         // 위 둘 요소는 각각 prevMax[i-1], prevMax[i]에 해당된다(삼각형 형태 상 일관된 규칙임)
//         curMax.push(Math.max(prevMax[i - 1], prevMax[i]) + curLv[i]);
//       }

//       // 다음 분기를 위해서 prevMax 이번 배열로 교체
//     }
//     prevMax = [...curMax];
//   }

//   // 이거 약간 그거 아닌가?
//   // 작은 문제 해결해서 큰 문제 가는거.
//   answer = Math.max(...prevMax);

//   return answer;
// }
