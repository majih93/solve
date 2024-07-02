// 2715. Timeout Cancellation
var cancellable = function (fn, args, t) {
  // fn과 입력값들을 받아서,
  // fn실행을 t만큼 delay
  const fnTimeout = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(fnTimeout);
  };
};

// t초 뒤에 전달된 fn함수를 실행하는데,
// 이 함수의 예정된 실행을 취소할 수 있는 함수를 반환해야되는 문제
