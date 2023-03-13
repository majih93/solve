// 버블 정렬

/**
 * 버블정렬이란?
 *
 * 이웃한 두 수끼리 비교해서, 뒤의 수가 작으면 서로 교환하는 형태
 * 0번 1번 비교 -> 큰 수 1번에
 * 1번 2번 비교 -> 큰 수 2번에
 * ...
 * n-1번 n번 비교 -> 큰 수 n번에
 *
 * 즉 1번의 반복 분기마다 뒤쪽의 큰 수가 차례대로 결정됨
 *
 * 결정된 자리는 다시 탐색할 필요가 없으므로 inner for 문은 결정되지 않은 자리 -1 까지만 돌면 된다(자리 바꾸니까)
 */

function sort_bubble(array) {
  let resultArray = array;

  // i 는 가장 마지막 인덱스 하나 전까지만 돌면 된다. 두 개 비교해서 자리 변경하는 형태로 구현되는 로직이기 때문에
  for (let i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return resultArray;
}

console.log(sort_bubble([13, 5, 11, 7, 23, 15])); // [ 5, 7, 11, 13, 15, 23 ]
