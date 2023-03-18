// 일곱 난장이

// 9개의 숫자 중, 총합이 100이 되는 숫자 7개를 뽑아야한다.

// 입력된 순서대로 출력.

// 정답이 여러 가지인 경우, 아무거나 출력.

// 2가지 숫자를 더했을 때, 총합 빼기 100이 되는지 확인하면 되는 문제로 보임

const array = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const arr2 = [1, 2, 3];

function solution(arr) {
  let sum = arr.reduce((acc, curVar) => (acc += curVar), 0);

  let surplus = sum - 100;

  // 첫 번째 요소에 대해서 모든 다른 요소와 합했을 때 surplus가 나오는지 확인
  // 두 번째 요소에 대해서..
  // 세 번째..

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      tempSum = arr[i] + arr[j];

      if (tempSum === surplus) {
        console.log(arr[i], arr[j]); // 값은 잘 찍힘

        return arr.filter(function filter(curEl) {
          return curEl != arr[i] && curEl != arr[j];
        });
      }
    }
  }

  // return arr;
}

console.log(solution(array));

// 조건을 분기할 때, 잘 생각해야된다.

// AND 조건이어야하는지, OR 조건이어야 하는지 등등

// 강사님은 splice를 활용해서 푸셨음

// 내 코드의 문제점 -> return 이 중첩되어 있어서 알아먹기 힘들어보임
