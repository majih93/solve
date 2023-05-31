/**
 * 두 배열 합치기
 *
 * 오름차순으로 정렬된 배열이 주어짐
 * 두 배열을 오름차순으로 합쳐서 출력해라
 */

/**
 * 풀이전략
 *
 * pointer1 은 첫 번째 배열 0번째 인덱스에서 시작
 * pointer2 는 두 번째 배열 0번째 인덱스에서 시작
 *
 * 비교해서 작은 값을 결과 배열에 push
 * 작은 값이었던 pointer ++
 *
 * 다시 비교
 *
 * 일치하는 값이면 둘다 push 한 후에 pointer 둘다 ++
 */

const array1 = [1, 3, 5];

const array2 = [2, 3, 6, 7, 9];

function solution(arr1, arr2) {
  let answer = [];

  let arr1_Index = 0;
  let arr2_Index = 0;

  while (arr1_Index < arr1.length || arr2_Index < arr2.length) {
    // 둘 중에 하나라도 다집어 넣은 경우
    if (arr1_Index >= arr1.length) {
      answer.push(arr2[arr2_Index]);
      arr2_Index++;
      continue;
    } else if (arr2_Index > arr2 >= arr2.length) {
      answer.push(arr1[arr1_Index]);
      arr1_Index++;
      continue;
    }
    // 값이 같은 경우 둘다 결과 배열에 밀어 넣고, 두 인덱스포인터 모두++
    if (arr1[arr1_Index] === arr2[arr2_Index]) {
      answer.push(arr1[arr1_Index]);
      answer.push(arr2[arr2_Index]);

      arr1_Index++;
      arr2_Index++;
    } else if (arr1[arr1_Index] > arr2[arr2_Index]) {
      // arr1 값이 더 큰 경우
      answer.push(arr2[arr2_Index]);
      arr2_Index++;
    } else if (arr1[arr1_Index] < arr2[arr2_Index]) {
      answer.push(arr1[arr1_Index]);
      arr1_Index++;
    }
  }

  return answer;
}

console.log(solution(array1, array2)); // 정답은 나왔는데...

// 일단 답을 맞추긴 했는데, 뭔가 코드가 장황해. 조건을 조금 더 잘 분기칠수 없을까?

// 선생님 풀이

// while 문 조건은 두 인덱스포인터 모두 길이보다 작은 것으로 걸었음 -> 하나라도 초과하면 out

// arr[arr_Index++] 형태로 작성하면 index 값에 대해서 연산이 수행된 후에 index value에 ++ 처리된다.
