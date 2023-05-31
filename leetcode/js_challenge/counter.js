// closure 를 사용해서 counter 기능을 개발해보자.

const createCounter = function(n) {
  return function() {
    return n+1
  }
}
const counter = createCounter(1)

console.log(counter()) // 2
console.log(counter()) // 2
console.log(counter()) // 2

// 역시 클로저 개념이 아주 빈약하군..
// 함수와 함수가 선언되었을 때의 렉시컬 환경의 조합

const createCounterTrial2 = function(n) {
  let count = n
  return function() {
    return count++
  }
};

const counter2 = createCounterTrial2(1)

console.log(counter2()) // 1
console.log(counter2()) // 2
console.log(counter2()) // 3


// normally, when a function finishes executing, its local variables and parameters would be destroyed. but when an inner function forms a CLOSURE over those variables, they are kept alive in memory.

// 아하! 전달된 인자값들에 대해서도 이미 reference를 가지고 잇는 상태 즉 굳이 또 변수에 저장할 필요가 없음

const createCounterTrial3 = function(n) {
  return () => n++
}

const counter3 = createCounterTrial3(1)
// createCounterTrial 함수는 실행되고 끝났지만, n은 counter3 에 의해서 참조되어서 메모리상에 남아있음

console.log(counter3()) // 1 -> 같은 메모리 주소에 있는 n을 참조 및 처리(++)
console.log(counter3()) // 2 -> 같은 메모리 주소에 있는 n을 참조 및 처리(++)
console.log(counter3()) // 3 -> 같은 메모리 주소에 있는 n을 참조 및 처리(++)


// 조금 더 똑똑하게 활용하면 이런 기능도 구조화할 수 있다.
const createAddN = function(n) {
  return function(x) {
    return n+x
  }
}

const add5 = createAddN(5)

console.log(add5(3)); // 8
// 우오오오!! 주어진 숫자에 5를 더하는 functionality를 가진 함수를 만들 수 있다.

// 근데 WHY NOT JUST
function add5(n) {
  return n+5;
}