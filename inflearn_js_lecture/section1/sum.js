// 1 부터 N 까지의 합을 구하려면..
// 0 부터 N - 1 까지 반복되는 반복문을 활용해서 sum 에 더해주는 식으로 하면 될 듯 하다.

// 최초 시도
function solution(N) {
  let answer;

  for (i = 1; i <= N; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(6)); // NaN
console.log(solution(10)); // NaN

// NaN 이 결과값으로 출력됨
// -> answer 변수가 선언만되고, 값이 할당되지 않은 상태에서 숫자를 더해서 js 엔진이 처리하지 못한 것으로 파악됨
function solution2(N) {
  // 0 을 할당하고, 더해가는 형태로 수정
  let answer = 0;

  for (i = 1; i <= N; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution2(6)); // 21
console.log(solution2(10)); // 55

// 변수를 할당하지 않은 상태에서 뭘 더해도 처리가 안될까?

let a;

a += "person";

console.log(a); // undefinedperson

a += "person2";

console.log(a); // undefinedpersonperson2

let b;

b += 0.1;

console.log(b); // NaN

// 왜 이렇게 되는 걸까?
// 할당하지 않고 해당 변수를 조작하는 개념인데..왜 에러는 발생하지 않는지?

let c;

console.log(c); // undefined

// 이 부분은 변수 할당부터 차차 공부해서 이해해보아야 할 듯
