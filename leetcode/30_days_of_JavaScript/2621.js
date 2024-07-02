// 2621. Sleep

// 양의 정수 millis가 주어질 때, millis 밀리초 동안 대기한 후 reolve되는 async 함수를 써라.

// 함수의 반환값에 대해서 then을 호출 -> 원하는 형태로 resolve되는 Promise를 반환한다.

// millis만큼 기다렸다가 res함수를 실행하는 Promise를 반환하면 됨.

async function sleep(millis) {
  // 임의로 주어진 시간만큼 기다렸다가 resolve되는 함수를 return 해라
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, millis);
  });
}
