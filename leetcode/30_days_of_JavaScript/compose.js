// 함수 합성이라..

// [f,g,h..] 등 함수 배열에 대해서 fn(x) = f(g(h(x))) 가 되도록 하는 합성함수 fn 을 구하는 문제

// 잘 모르겠네 흠

// 아래와 같은 형태의 함수로 합쳐지도록 구현해야 한다.
function one(x) {
  return x;
}

function two(x) {
  return 2 * x;
}

function three(x) {
  return 3 * x;
}

function composed(x) {
  return one(two(three(x)));
}

// 가장 마지막 순서의 함수부터 실행해서 앞 순서 함수의 인자로 전달해야 한다.

const f = [one, two, three];

// 가장 무식하게 처리하는 방법부터 생각해보자.
function try1(x) {
  let result = x;

  for (let i = f.length - 1; i >= 0; i--) {
    result = f[i](result);
  }

  return result;
}

console.log("try1", try1(1)); // 6

// 뭔가 근데 더 나은 방법이 있으려나? 아니 더 정확히 말하면 더 깔쌈한 방법이 있어야할 것 같은 문제란 말이지..

// reduceRight 라는 함수가 존재하고 함수 합성에 사용될만하다는 점

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduceRight((prev, curr) => {
  console.log(prev, curr);
  return prev + curr;
});

console.log(sum); // Output: 15

// 5 4

// 9 3 ...

// 우측에서부터 숫자가 accumulate 된다.

// 즉 우측에서부터 전달된 콜백함수가 실행되어 최종적으로 값이 return 됨

// 즉 함수 합성을 reduceRight 를 통해서 구현하려면

const reduceRightComposition = () => {
  return (x) =>
    f.reduceRight((acc, func) => {
      return func(acc);
    }, x);
};

const composedFunction = reduceRightComposition();

console.log(composedFunction(1)); // 6
