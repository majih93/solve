/**
 * 재귀에 대해 이해해보자
 *
 * 재귀는 큰 목표 작업 하나를 동일하면서 간단한 작업 여러개로 나눌 수 있을 때 유용한 프로그래밍 패턴
 *
 * 특정 함수가 자기 자신을 호출하는 경우도 재귀라고 부른다.
 *
 */

// x 를 n 제곱해주는 함수를 재귀를 사용하는 방법과, 그렇지 않은 방법으로 구현해보면서 이해해보자.

/**
 *
 * @param {수} x
 * @param {지수} n
 */

// 방법1. 전통적인 for 문

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    // result = result * x;
    result *= x;
  }

  return result;
}

// 방법2. 재귀적인 사고를 통한 방법. 작업을 단순화하고 자기 자신을 호출함

function recursivePow(x, n) {
  // 반복적으로 호출되는 로직이 있어야 하고,
  // 자기 자신이 반복되어야 한다.
  // 그리고 종료되는 조건이 있어야 함 -> 이 경우 n === 1 인 case 이다
  if (n === 1) {
    return x;
  } else {
    return x * recursivePow(x, n - 1);
  }
}

// 위 코드는 어떻게 실행되는지 보자.

/**
 * recursivePow(2,3) 이 실행되는 과정
 * 1. recursivePow(2,3) 호출
 * 2. n != 1 이므로, 2 * recursivePow(2, 2)반환
 * 3. recursivePow(2,2) 호출
 * 4. n != 1 이므로, 2 * recursivePow(2,1) 반환
 * 5. n === 1 이므로, 2 반환
 * 6. 2 * 2 * 2 반환하는 형태로 처리되어서 8이 반환된다.
 */

// JavaScript 엔진은 최대 재귀 깊이를 제한한다.
// 만개 정도는 확실히 허용되지만, 엔진에 따라 차이가 조금 존재하고 십만까지는 대부분의 엔진이 다루지 못함

//---------------------------------------------------------------------------------------------------------------------

// 조금 더 이해하기 위해서 유튜브 추가로 시청함

// 마트료쉬카를 예시로 생각해보자.

// sudo code

// function processDoll(doll) {
//   if (lastDoll) {
//     return "존맛탱구리~~";
//   } else {
//     processDoll(the smaller dol)
//   }
// }

// factorial 을 재귀함수로 생각해보자.

function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); // 24 = 1* 2* 3* 4
// 포인트는 함수를 다른 인자로 재호출 한다는점과
// 종료 조건이 있다는 점
