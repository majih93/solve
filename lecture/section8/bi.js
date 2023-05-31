// 재귀함수 이용한 이진수 출력

// 이진수 만드는 로직부터 파악

// function mySol(n) {
//   let answer = "";
//   function DFS(L) {
//     // 종료조건
//     if (L === 1) {
//       answer += "1";
//       return;
//     } else {
//       // 가장 나중에 호출된 함수가 가장 먼저 결과에 대해서 처리되어야 하므로 이전 함수 호출 먼저 처리
//       DFS(parseInt(L / 2));
//       // 이후 해당 분기에서 처리되어야 할 함수 처리
//       if (L % 2 === 0) {
//         answer += "0";
//       } else {
//         answer += "1";
//       }
//     }
//   }

//   DFS(n);

//   return answer;
// }

// 결과값을 전달해서 더해가는건 안되나?
// return문을 통해서 해결한 버전
function mySol(n) {
  // let answer = "";
  function DFS(L) {
    // 종료조건
    if (L === 1) {
      return "1";
    } else {
      // 가장 나중에 호출된 함수가 가장 먼저 결과에 대해서 처리되어야 하므로 이전 함수 호출 먼저 처리
      let tempAnswer = DFS(parseInt(L / 2));
      // 이후 해당 분기에서 처리되어야 할 함수 처리
      if (L % 2 === 0) {
        tempAnswer += "0";
      } else {
        tempAnswer += "1";
      }
      return tempAnswer;
    }
  }

  return DFS(n);

  // return answer;
}

console.log(mySol(11));
