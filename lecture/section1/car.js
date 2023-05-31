// 10부제

// 최초 풀이

// 해당 요일의 숫자와, 주어진 숫자의 1의 자리값을 비교하는 문제
// 숫자의 1의 자리를 알려면? -> 10으로 나눠서, 나머지를 보면 된다.

function solution(dayNumber, plateNumbers) {
  let numberOfViolatedCars = 0;
  for (let x of plateNumbers) {
    // 10으로 나눈 나머지가 해당 요일의 숫자와 같은지 비교
    if (x % 10 === dayNumber) {
      numberOfViolatedCars++;
    }
  }

  return numberOfViolatedCars;
}

let answer = solution(3, [25, 23, 11, 47, 53, 17, 33]);

console.log(answer); // 3

// 선생님 풀이와 거의 동일
