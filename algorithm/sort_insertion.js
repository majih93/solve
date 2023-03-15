// 삽입정렬

/**
 * 0번 인덱스는 그대로 둔다.
 * i 는 1번 인덱스부터 도는 것으로 설정
 * j 는  i-1 ~ 0 까지 돈다 -> 즉 i 앞에 있는 모든 숫자를 탐색한다는 것
 *
 * arr[i] 값을 임시 변수에 저장
 *
 * j 가 돌면서,
 */

function insertion_sort(array) {
  let resultArray = array;

  for (let i = 1; i < array.length; i++) {
    let temp = array[i]; // 일시적으로 해당 값 저장 -> 나중에 필요한 자리에 삽입해주기 위해서
    for (let j = i - 1; j >= -1; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j]; // 비교값보다 크면, 자리 만들기 위해서 한자리 뒤로 밀어버린다.
      } else {
        array[j + 1] = temp;
        break;
      }
    }
  }
  return resultArray;
}

console.log(insertion_sort([11, 7, 5, 6, 10, 9])); // [ 5, 6, 7, 9, 10, 11 ]
