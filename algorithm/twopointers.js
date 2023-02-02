/**
 * 투포인터 알고리즘
 *
 * 1차원 배열 문제나 문자열 문제에서 많이 사용됨
 *
 * 특히 한 배열에서 부분 배열을 다룰 때,
 * 한 배열에서 각각 다른 위치에 있는 원소들로 뭔가를 계산할 때.
 *
 * 쓰는 이유 중 하나는,
 * 완전 탐색 솔루션(O(n^2))를 O(n)으로 성능으로 향상이 가능함
 * 완전 탐색의 경우, 반복에 따라서 엄청 느려질 수도 있음
 */

// 대충 컨셉을 알았으니, 한 번 머리로 풀어보자.

// 배열에서, 원소들의 합이 x 가 되는 연속 부분 배열의 개수를 구해라.

// 원래같으면, 이중 for 문으로 인덱스 처리하면서 더해지는 경우 count++ 하는 식으로 접근했을 듯 하다.

// 하지만 말그대로 두개의 포인터를 사용한다고 치면...

// 첫 번째 포인터는 인덱스, 두 번째 포인터는 +1 인덱스로 해서 처리하면 되지 않을까?

function solution(arr, x) {
  let answer = 0;

  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer1] + arr[pointer2] === 9) answer++;
    pointer1++;
    pointer2++;
  }

  return answer;
}

// console.log(solution([1, 3, 6, 5, 2, 7, 9], 9)); // 2 -> 실패!

// 문제를 완전 잘못 이해했음. 연속 부분 배열이라는거는 꼭 2개의 조합이 되어야 하는 것은 아니다.

// 그러므로, 3개가 될수도 있고 4개가 될 수도 있음

function solution2(arr, x) {
  let answer = 0;
  // 첫 번째 포인터, 두 번째 포인터 모두 0 번째 인덱스에서 시작.
  // 두 포인터가 위치가 같은 것이 시작점. 거기서 해당 인덱스 값을 점검.
  let pointer1 = 0;
  let pointer2 = 0;

  // pointer 증가시키면서 합 보관할 변수
  let tempSum = 0;

  // case 1 포인터 2개가 같은 값임 -> 해당 인덱스 값 점검 후, 경우에 따라 처리
  // 1번째 포인터가 끝까지 갔을 때 끝나는 것으로 설정
  while (pointer1 < arr.length) {
    console.log(pointer1, pointer2);
    // 포인터 값이 동일하다면 해당인덱스 값 체크
    if (pointer1 === pointer2) {
      if (arr[pointer1] === x) {
        answer++; // 정답 1개 추가
        pointer1++; // 둘 다 다음 인덱스로 진입
        pointer2++; // 둘 다 다음 인덱스로 진입
      } else if (arr[pointer1] < x) {
        // 정해진 값보다 작은 경우 -> 오른쪽 포인터만 이동
        tempSum += arr[pointer1];
        pointer2++;
      } else {
        // 정해진 값보다 큰 경우 -> 그냥 pass해서 다음 인덱스 점검
        pointer1++;
        pointer2++;
      }
    } else {
      // 포인터 같지 않은 경우. 즉 오른쪽으로 범위 늘려가면서 합이랑 일치하는지 점검 중
      // 포인터2가 위치한 요소값을 tempSum 에 추가
      tempSum += arr[pointer2];

      // tempSum 이 일치하는 경우
      if (tempSum === x) {
        answer++; // 정답 추가
        pointer2++; // 포인터 2 다음 위치로
        pointer1 = pointer2; // 포인터 1도 다시 포인터 2와 같은 위치로
        tempSum = 0; // tempSum 초기화
      } else if (tempSum < x) {
        // 합이 x 보다 작은 경우 -> 우측 포인터 이동시켜줘야함
        pointer2++;
      } else {
        // 합이 x 를 초과해버린 경우 -> pointer1을 pointer2 위치로 끌어오고(다시 시작해야함), tempSum 초기화
        pointer1 = pointer2;
        tempSum = 0;
      }
    }
  }

  return answer;
}

// console.log(solution2([1, 3, 6, 5, 2, 7, 9], 9)); // 1.. 3이 나와야하는데 또 실패.. 왜 실패했을까?

// 인덱스 상황 찍어보니까 바로 이해가 되었음
// 놓친 케이스. 1 3 6하면 10이라서 초과인데,이 경우 포인터1을 3으로 놓고 다시 체크했어야 하는데 그게 아니라 바로 둘다 인덱스 2로 맞춰서 시작하는 형태로가버렸음.

function solution3(arr, x) {
  // 1. 두 포인터 값이 같은 경우, 해당 인덱스 값을 확인 -> x 와 같으면 다음 인덱스로, 같지 않은 경우 다르게 처리
  let answer = 0;

  let p1 = 0;
  let p2 = 0;

  // 부분배열 합 담을 임시변수
  let tempSum = 0;

  // pointer1 이 끝까지 간 경우 종료
  while (p1 < arr.length) {
    // console.log(p1, p2);

    // 1. 포인터 값 같음
    if (p1 === p2) {
      // 해당 값이 x인 경우
      if (arr[p1] === x) {
        answer++;
        p1++; // 포인터 이동
        p2++;
        // console.log("해당!");
      } else if (arr[p1] > x) {
        // 해당 값이 x 보다 크면
        p1++;
        p2++; // 그냥 pass
      } else {
        // 해당 값이 x 보다 작으면
        tempSum += arr[p1];
        p2++; // 해당 인덱스값 임시합에 더하고, 두번째 포인터 이동
      }
    } else if (p2 > p1) {
      // 우측 포인터가 더 큰 경우
      // 우선 p2 값을 tempSum 에 추가후 결과값을 가지고 다음 액션 판단
      tempSum += arr[p2];

      if (tempSum === x) {
        answer++; // 답 추가
        p2++; // 우측 포인터 하나 이동
        p1 = p2; // 좌측 포인터 우측 포인터위치에 맞춤
        tempSum = 0; // 일시 합 값 초기화
        // console.log("해당!");
      } else if (tempSum < x) {
        // 결과값이 아직 x 보다 작은 경우
        // tempSum += arr[p2]; // p2 위치 값 tempSum에 더하고,
        p2++; // 우측 포인터만 하나 오른쪽으로 이동
      } else if (tempSum > x) {
        // 합이 x를 초과해버린 경우
        tempSum -= arr[p1]; // p1 우측으로 이동시켜서 다시 합 구해야하니까, p1 에 있던 값은 일시 합에서 빼줘야함
        tempSum -= arr[p2];
        p1++; // p1 우측으로 한칸 이동
      }
    }

    // console.log("현재 총합");
    // console.log(tempSum);
    // console.log("-----------------------------------");
  }

  return answer;
}

// console.log(solution3([1, 3, 6, 5, 2, 7, 9], 9)); // 3 -> 일단 맞춤

// 놓친조건들이 있었고,

// 코드를 느낌으로 짜니까 이러는거같음

// 유튭 강의 풀이

function teacherSolution(arr, x) {
  let count = 0;

  let sum = 0;
  let left = 0;
  let right = 0;

  // 일단 반복문 조건을 right 기준으로 잡음
  while (right <= arr.length) {
    // sum을 기준으로 분기를 치는구나.
    if (sum === x) {
      count++;
      sum -= arr[left];
      left++;
    } else if (sum < x) {
      sum += arr[right];
      right++;
    } else if (sum > x) {
      sum -= arr[left];
      left++;
    }
  }

  return count;
}

console.log(teacherSolution([1, 3, 6, 5, 2, 7, 9], 9)); // 3

// 어떤 차이가 있을까?
