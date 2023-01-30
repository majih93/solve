/**
 * 자릿수의 합
 *
 * N개의 자연수 입력
 * 각 자연수의 자릿수의 합 중, 그 합이 최대인 자연수 출력
 * 자릿수의 합이 같은 경우, 숫자가 큰 숫자를 답으로 처리
 */

/**
 * 자연수 배열 돌면서,
 *
 * 각 자연수별로 자릿수 합 구한다.
 *
 * 자릿수 합 어떻게 구할 것인지?
 * - split, reduce, 명시적 형변환 활용해서 처리
 *
 * 최대값을 담을 변수 1
 * 합이 최대값인 자연수 담을 변수 1
 *
 * 비교해가면서 교체하는 형태로 구현
 *
 */

const arr = [128, 460, 603, 40, 521, 137, 123];

function solution(numberArray) {
  let answer = 0;

  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let x of numberArray) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b));

    if (sum > maxSum) {
      answer = x;
      maxSum = sum;
    }

    if (sum === maxSum) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution(arr)); // 137

// 선생님 풀이

// 내가 숫자를 문자로 형변환해서 쪼개서 푼 부분에 대해서, while 반복문으로 풀이하셨음

// 원리 -> 10으로 나눴을 때, 1의 자리수가 나머지이고 10의 자리 이상이 몫으로 처리된다는 것에 착안

// while(number)의 조건식에서, number 를 10으로 나눈 몫으로 대체하다보면 몫이 0이 되면 false 처리된다. 몫이 0이라는 거는 한자리씩 처리되어서 처리할 값이 없다는 의미가 되기도 함
