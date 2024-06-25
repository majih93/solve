// 2637. Promise Time Limit

// fn과 t를 받아서 t안에 fn이 실행완료되면 fn의 res값을 반환하고, 아니면 reject("Time Limit Exceeded")를 반환하는 함수를 작성
// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     // return a new 'time limited' version of fn
//     // 이 함수가 resolve된다.
//     return new Promise(async (res, rej) => {
//       // 시간안에 처리 안되면 rej
//       // await 문 뒤에 setTimeout을 실행하면 await의 피연산자 Promise가 fulfill될 때까지 실행되지 않을 것이므로, 앞단에 시간 리밋을 설정한다.
//       setTimeout(() => {
//         rej("Time Limit Exceeded");
//       }, t);

//       // fn이 시간내에 완료되는 경우 처리될 로직
//       // unhandled promise rejection에러가 발생해서 한참 헤맸는데, fn 함수가 reject되는 경우를 처리하지 않아서 그랬음.
//       try {
//         const result = await fn(...args);
//         res(result);
//       } catch (error) {
//         // error를 가지고 reject한다.
//         rej(error);
//       }
//     });
//   };
// };

// Promise.race를 활용한 solution.
var timeLimit = function (fn, t) {
  return async function (...args) {
    const fnPromise = fn(...args);
    const timeout = new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([fnPromise, timeout]);
  };
};
