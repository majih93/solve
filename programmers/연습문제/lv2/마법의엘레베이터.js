// 마법의 엘레베이터

/**
 * 풀이 전략
 *
 * - 최소한으로 돌을 소모하기 위해서 취해야하는 전략 파악하기
 *
 * - 10의 거듭 제곱을 기준으로 판단.
 * ex) 두 자리 수인 경우, +1 / -1 중 더 작은 수를 처리한 후에 나머지는 -10 으로 처리하는 것이 무조건 최소값
 *
 * 세 자리 수인 경우, -> 2자리 수에 대해서는 2자리 수 최소값 구하는 형태로 처리하고, 나머지는 -100을 처리하는 것이 최소값
 *
 * -> 4자리 수인 경우 -> 3자리 수에 대해서는 3자리 수 최소값 구하는 형태로 처리하고, 나머지는 -1000 처리하는 것이 최소값
 *
 * ..... 즉 각 자리수에 대해서 최소값을 구하는 방식을 재귀적으로 처리하면 되는 것으로 일단 파악됨.
 * -> 1의 자리에 대해서만 판단하고, 나머지는 그냥 해당 자리 숫자 더하면 됨.
 * -> split 해서 해당 배열의 마지막 숫자에 대해서만 판단하고, 나머지는 그냥 reduce 처리하면 될 것으로 생각된다.
 * -> 1의 자리는
 * -> 0 인 경우 -> 아무 처리 안함
 * -> 1 ~ 4 인 경우 -> 해당 숫자대로 처리
 * -> 5인 경우 둘 중 아무렇게나 똑같음 (+5)
 * -> 6~9 인 경우 -> +(10-x) 로 처리
 *
 * ---------
 *
 * 완전히 잘못 생각했음
 * 10의 자리 숫자 -> 16인 경우-> 6을 빼는 것보다, +4 하고 -20 하는 것이 낫다.
 * -6 -10 하면 7회, 전자는 6회
 *
 * -> 3자리 숫자인 경우에도,
 * -> 10의 자리 숫자가 6 이상인 경우 -> +10 4번하고 -100을 필요한 만큼 처리하는 것이 더 빠르다.
 * -> 160 -> 10 4번, -100 2번
 * -> 260 ->
 * -> 각 자리에 대해서 이전 자리 숫자를 확인하는 과정이 필요하다.
 * -> 시작점이 1의 자리 숫자여야 하는지,
 * 560이면?
 * -> 10 4번, 100 4번 더하고, 1000한번 뺀다 = 9번
 * -> 10 4번 더하고, 100 6번 뺀다 -> 10번
 * --> 즉, 이전 자리 숫자가 6이상인 경우에 대해서 다음 자리 숫자에 대한 판단이 달라지는 경우도 고려되어야 한다.
 * 1의 자리 숫자에서 시작해야 된다는 의미.
 *
 * -> 1의 자리 숫자 처리 -> 10의 자리 숫자 처리..... -> 10의 n 승 숫자 처리
 *
 * split 한 후에,
 * -> 마지막 자리를 처리하고, -> 해당 자리 숫자 처리에 대해서 윗 자리 숫자에 반영
 * -> 배열 빌때까지
 *
 * ---
 *
 *
 */

// function solution(storey) {
//   let answer = 0;

//   let splitArray = storey.toString().split("");

//   // 한자리수인 경우 따로 처리
//   if (splitArray.length === 1) {
//     if (storey < 6) {
//       return storey;
//     } else {
//       return 10 - storey + 1;
//     }
//   }

//   // splitArray 길이가 1 이상인 경우 반복
//   while (splitArray.length > 0) {
//     // 해당 분기 자리 숫자 처리
//     let number = Number(splitArray.pop());

//     if (number === 0) {
//       continue;
//     } else {
//       if (number <= 5) {
//         answer += number;
//       } else {
//         // 6이상인 경우

//         // 10에서 해당 숫자를 뺀 만큼 마법의 돌 사용
//         answer += 10 - number;

//         // 다음 자리숫자에 대해서 +1처리
//         if (splitArray.length > 0) {
//           splitArray[splitArray.length - 1] =
//             Number(splitArray[splitArray.length - 1]) + 1;
//         }
//       }
//     }

//     console.log(splitArray);
//   }

//   return answer;
// }

// console.log(solution(49092));

// console.log(solution(6));

// console.log(solution(2000));
// console.log(solution(2006));

// -------

/**
 * 틀린 경우 존재
 *
 * - 어떤 case 를 놓쳤을지?
 *
 * - 숫자가 한자리인 경우 틀림 -> 처리
 *
 * 그래도 틀림
 *
 * - 어떤 케이스를 또 놓쳤을까??
 * 올림 처리해서 +1 했을 때 해당 자리 숫자가 9인 경우 어떻게 처리되지?
 *
 * 96
 * -> 기대 결과 = 5
 * BUT 실행 결과 = 4 왜?
 * 6에 대해서 4가 더해서 처리됨
 * 9 -> 10으로 변경 10-10 이 더해짐 -> 4라는 결과 출력
 * 해당 숫자가 9인 경우 -> 0으로 처리한 후에, 그 다음 자리 수에 1을 더해야 한다.
 * 99 -> 2가 출력되어야 함
 * -> 그러면 1996 같이 9가 연속되는 경우는?
 * > 6에 대해서 +4
 * > 다음자리 +1 -> 9는 0이 되고, 다음 자리 +1
 * > 9는 0이 되고 -> 다음 자리 +1
 * > 이전 자리가 9라서 0인지, 아니면 원래 0인지 담는 변수를 하나 두고 해당 변수를 조작하는 형태로 처리해보자.
 */

// function solution(storey) {
//   let answer = 0;

//   let isPrevious9 = false;

//   let splitArray = storey.toString().split("");

//   // 한자리수인 경우 따로 처리
//   if (splitArray.length === 1) {
//     if (storey < 6) {
//       return storey;
//     } else {
//       return 10 - storey + 1;
//     }
//   }

//   // splitArray 길이가 1 이상인 경우 반복
//   while (splitArray.length > 0) {
//     // 해당 분기 자리 숫자 처리
//     let number = Number(splitArray.pop());

//     if (number === 0) {
//       continue;
//     } else {
//       if (number <= 5) {
//         answer += number;
//       } else {
//         // 숫자가 10 이상인 경우 (원래 9였는데, 이전에 올림처리로 인해서 10으로 변경된 경우)
//         if (number >= 10) {
//           // 배열 마지막 숫자인 경우 -> answer += 1
//           if (splitArray.length === 0) {
//             answer += 1;
//           } else {
//             // 아니면 다음 자리 숫자에 1 더해주는 처리
//             splitArray[splitArray.length - 1] =
//               Number(splitArray[splitArray.length - 1]) + 1;
//           }
//         } else {
//           // 배열 마지막 숫자인 경우
//           if (splitArray.length === 0) {
//             answer += 10 - number + 1;
//           } else {
//             answer += 10 - number;
//             if (splitArray.length > 0) {
//               splitArray[splitArray.length - 1] =
//                 Number(splitArray[splitArray.length - 1]) + 1;
//             }
//           }
//         }
//       }
//     }
//   }

//   return answer;
// }

// // console.log(solution(96));
// // console.log(solution(999));
// // console.log(solution(1));
// // console.log(solution(19986));
// // console.log(solution(1909));
// console.log(solution(678));

// 엣지 케이스를 고려해야 한다.
function solution(storey) {
  var answer = 0;

  // 1) 엘레베이터가 맨 앞의 숫자가 9를 넘어갈 경우를 대비해 '0'을 추가하여 배열로 담는다.
  storey = ("0" + String(storey)).split("");

  /* 
      2) 엘레베이터 자릿수 만큼 반복한다.
         일의자리 부터 감소하며 반복
  */
  for (let i = storey.length - 1; i >= 0; i--) {
    // 3) 현재 자릿수의 숫자가 5일 경우
    if (storey[i] == 5) {
      if (storey[i - 1] < 5) {
        /*
                   4) 다음 자릿수가 5보다 작다면, 
                      '-' 하는 것이 마법의 돌을 더 적게 사용 된다. 현재 숫자 만큼 마법의돌(answer)을 사용
              */
        answer += Number(storey[i]);
      } else {
        /*
                  5) 다음 자릿수가 5보다 크다면,
                     '+' 하는 것이 마법의 돌을 더 적게 사용 된다. 다음 자릿수를 증가 시킬 만큼 마법의돌 사용
              */
        answer += 10 - Number(storey[i]);

        // 6) 다음 자릿수를 증가 시킨다.
        storey[i - 1] = Number(storey[i - 1]) + 1;
      }
    } else if (storey[i] < 5) {
      // 7) 현재 자릿수가 5보다 작다면, 현재 숫자 만큼 마법의돌(answer)을 사용
      answer += Number(storey[i]);
    } else {
      // 8) 현재 자릿수가 5보다 크다면,  다음 자릿수를 증가 시킬 만큼 마법의돌 사용
      answer += 10 - Number(storey[i]);

      // 6) 다음 자릿수를 증가 시킨다.
      storey[i - 1] = Number(storey[i - 1]) + 1;
    }
  }
  return answer;
}
