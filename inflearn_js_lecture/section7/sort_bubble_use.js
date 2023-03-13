// 버블 정렬 응용 - specical sort(구글 인터뷰)

/**
 * 풀이 전략
 *
 *
 */

function mySol(arr) {
  let result = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return result;
}

console.log(mySol([1, 2, 3, -3, -2, 5, 6, -6])); //[   -3, -2, -6, 1,    2,  3,  5, 6]
