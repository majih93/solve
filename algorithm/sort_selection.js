// 선택정렬

/**
 * 특정 숫자로 이루어진 배열을 선택정렬 한다면?
 *
 * 0번째 인덱스에서 시작.
 * 1번째 인덱스부터 끝 인덱스까지 탐색하면서 해당 범위의 최소값 검색
 * 최소값을 0번째 인덱스와 교환 ( 자리 바꾼다는 느낌 )
 * 이 활동을 끝까지 반복
 */

function selection_sort(array) {
  let resultArray = array;

  for (let i = 0; i < array.length - 1; i++) {
    let idx = i; // 최소값을 담고 있는 배열 인덱스 -> array[i] 가 최소값일 수도 있기 때문에 일단 i 로 초기화
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[idx]) idx = j; // 최소값을 담고 있는 인덱스로 매 반복마다 갱신
    }
    // 안쪽 for문이 끝나면, i 를 포함해 그 뒷 부분 영역에서 최소값이 어디에 위치해 있는지 알고 있는 상태

    // 최소값과, i 번째 인덱스 값을 교환해서 정렬
    [array[i], array[idx]] = [array[idx], array[i]]; // 이런식으로 처리하면 해당 인덱스끼리 값 교환이 일어난다.
  }

  return resultArray; // 얕은 복사이기 때문에 array 를 조작하면 resultArray 도 변경된다 같이(라기 보다는 같은 메모리 주소를 참조하고 있는 상태
}
