// Flatten Nested Array

// n is depth.

// how can I flatten this array to have a depth of n?

const trsulr = [];

const flat = function (arr, n) {
  const result = [];

  const flattenByN = (array, curDepth) => {
    if (curDepth === -1) {
      return;
    } else {
      for (let x of array) {
        if (typeof x === "number") {
          result.push(x);
        } else {
          if (curDepth == 0) {
            result.push(x);
          } else {
            flattenByN(x, curDepth - 1);
          }
        }
      }
    }
  };

  flattenByN(arr, n);

  return result;
};

// console.log(
//   flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
// );

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);

console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
);
// 왠지 재귀함수로 풀어야할 것 같은데..

// 문제: n 만큼 중첩을 해제한 배열을 만들어야 한다.
//

// 일단 특정 요소가 배열인지 아닌지 어떻게 파악하는지?

// console.log(typeof []); // object
// console.log(typeof 3); // number

// object 인 경우에만 다시 재귀적으로 특정 함수 실행하고, n을 변경해서 처리하면 된다.

// n이 1인 경우에는 다시 추가하고, 아닌 경우에는 재귀적으로 해제

// 우오오오오 풀었다!!! 세상에!!!! 이게 되네!!!
// 배울점
// 재귀 함수 실행 시 persist 시키고 싶은 데이터가 있는 경우, 하나의 함수를 추가로 재귀함수 범위에 wrap 해서 데이터 persist 시키는 방법이 있다는 점.
