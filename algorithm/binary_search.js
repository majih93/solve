// 이분탐색

// 정렬된 배열에 대해서 반으로 잘라가면서 원하는 결과를 탐색하는 방법
// 정렬되어 있어야 한다는 점이 중요하다.

// 문제

// 숫자 배열 numberArray 에서 특정 숫자 target 이 몇 번째 인덱스에 위치하는지 찾기

// pseudo code

/**
 * IF the array is empty, return -1 as the element cannot be found.
 *
 * IF the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index.
 *
 * IF the target is less than the middle element, binary search left half of array.
 * IF the target is greater than the middle element, binary search right half of array.
 *
 */

function binary_search(arr, target) {
  // use two pointers, left and right
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // repeat as long as array is not empty
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    // check if target is equals to middle element -> if yes, return middleIndex
    if (target === arr[middleIndex]) return middleIndex;

    // decide which side to continue
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  // if nothing has been returned from searching the array, return -1
  return -1;
}

console.log(binary_search([-5, 2, 4, 6, 10], 6)); //3,  arr 는 정렬된 배열이라고 가정하고 정렬 처리는 스킵

// Big-O = O(logn)
