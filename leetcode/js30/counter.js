// Closure

// Closure is created when a function is defined inside another function.
// and the inner function references variables in the outer function's scope.
// closure 'remembers' -> closure 가 기억한다, 즉 closure 는 그 자체로 하나의 그 무언가
// 생성된다. -> 그리고 outer function 의 scope 에 속해있는 값에 대한 참조를 유지

// Usage 1. Private variable 과 function 에 사용

const makeCounter = () => {
  // outer function has a variable in its scope
  let count = 0;

  // return inner function
  return () => {
    count++;
    console.log(count);
  };
};

// makeCounter 함수 실행 시 새로운 scope 를 생성, 그리고 그 스코프는 count라는 변수가 0으로 초기화된 상태
// 그리고 이 스코프를 'close over' 하는 새로운 함수를 반환한다. ( 반환되는 함수는 실행 시 특정 로직 실행 )
// counter 변수에 해당 함수 (=== makeCounter 의 return value)를 할당하면, count 변수에 대한 reference를 가지고 있는 closure 를 생성한다.

// counter 함수는 count 변수를 close over 하는 상태이므로 실행할 때 마다 count 변수는 처리됨

let counter = makeCounter();

// counter 는 makeCounter 함수가 return 하는 inner function

// outer function 인 makeCounter 는 return 해서 실행이 끝남

// 그런데 outer function 의 scope에 선언되었던 count 변수에 여전히 접근 및 조작이 가능함

counter(); // 1
counter(); // 2
counter(); // 3

// 이때, 우리는 실제로 조작되는 count 변수에 직접 접근할 방법이 없다는 점에 주목해야 한다.
// 즉, count 변수는 private 한 변수로 오직 makeCounter 메서드에 의해서만 접근이 가능하다.

// Usage 2. Partial function

function add(x) {
  return function (y) {
    return x + y;
  };
}

let addFive = add(5);

console.log(addFive(3)); // 8

// 쉽게 이야기하면, x 를 더하는 함수를 생성하는 로직이다.
// x는 add 함수의 scope 에 포함된 값이므로, x scope 에 대한 reference 를 가지고 있는 addFive 함수에서 x인 5의 값에 대한 참조가 유지된다.
// add함수 자체는 실행되고 종료된 상태
// new 전달된 인자에 5를 더하는 함수

// 이게 정말 필요한 순간이 있을 수도 있겠지만, 적어도 아직까지는 그냥 필요한 경우에 따라서 상수로 처리하는 것이 더 직관적이지 않나 싶다.
