// Counter II

var createCounter = function (init) {
  let counter = init;

  return {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    reset() {
      counter = init;
      return counter;
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

// init 변수도 closure 에 포함되어 있다는 알겠음 -> 그런데, 정확히 모르겠는데 부분은?
// createCounter 의 closure 라고 표현하는 것이 맞는지? 아니면 counter 변수에 저장된 함수 (createCounter(5)가 반환한 함수의 closure)의 closure 라고 표현하는 것이 맞을지..?

// counter 함수는 createCounter(5)의 scope를 close over 하고 있기 때문에 init 과 counter 에 접근이 가능함

// close over 가 좋은 힌트이고, 또한 어떤 함수가 innerfunc 이고 outerfunc 인지 생각해볼 필요가 있다.
// closure 를 코드에서 직접적으로 짜서 활용하는 경우가 잘 없겠지만, closure 라는 컨셉이 이 언어에서 왜 존재하고 어떤 프로그래밍 컨셉이 반영되어 있는지 아는 방향으로 공부하면 분명히 도움이 될 것이라 생각한다.
