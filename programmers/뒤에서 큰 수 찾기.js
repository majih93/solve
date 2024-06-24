// // 뒤에 큰 수 찾기
// function solution(numbers) {
//   let answer = Array(numbers.length).fill(-1); // -1로 초기화

//   let tempMax = numbers[0];
//   let lastIdx = 0;

//   // 1번째 요소부터 탐색
//   for (let i = 1; i < numbers.length; i++) {
//     if (i === 1 && tempMax > numbers[i]) {
//       tempMax = numbers[i];
//       lastIdx = 1;
//     }

//     if (numbers[i] > numbers[0] && answer[0] === -1) {
//       answer[0] = tempMax;
//     }

//     if (numbers[i] > tempMax) {
//       tempMax = numbers[i];
//       for (let j = lastIdx; j <= i - 1; j++) {
//         answer[j] = tempMax;
//       }
//       lastIdx = i;
//     }
//   }

//   return answer;
// }

// console.log(solution([2, 3, 3, 5]));
// console.log(solution([9, 1, 5, 3, 6, 2]));

// 대부분의 경우에 실패
// 가닥은 맞게 잡았을 거같은데 디테일을 놓친 부분이 있을 듯 하다.

// 가닥에 대해서 다시 생각해보자.

// 특정 지점까지 최대값을 찾고, 해당 값이 갱신되는 경우에 저장된 지점까지 그 최대수로 대체하는 로직이다.
// 어떤 경우를 못 걸러낼까?
// [10, 9, 8, 7, 6, 5, 8, 11]

// 지금 max는 9로 되어있는데,
// 11이 등장한다고 쳐보자.
// 이러면 9에 대해서도 11이 등장해야 하는데, 11이 처리가 되지 않는 이슈가 있다.

// 근본적으로 접근법이 틀렸을 것 같음.

// 뒷큰수라...

// 저장되지 않은 최초 자릿수를 기억해두고, 그 자릿수까지 다 탐색하면서 매번 처리되는 형태
// 최악의 경우 다 탐색해야되지만 그래도 될 가능성이 있음

// 아니면, 저장되지 않는 케이스만 인덱스를 저장해서 해당 배열에 대해서 매번 탐색하는 걸로 처리하면 어때?

// let notDecided = [0, 10, 14] 에 대해서 looping하면서 해당 값이 더 크면 업데이트 시키는 형태
// function solution2(numbers) {
//   let answer = Array(numbers.length).fill(-1);

//   // let notDecided = new Map();
//   // Map 을 통해서 처리할까 했는데, JavaScript Map 을 iterate하면서 값을 제거하는게 safe한 처리인지 모르겠음.
//   // 일단은 Array 및 filter() 메서드를 활용해서 구현하자.
//   // 그래도 filter 메서드가 자연스럽게 생각나는거보니 조금 나아졌네.

//   // 조금 더 refining 하면 좋겠는데 아이디어 자체를..
//   // 일단 컨셉 자체는 좀 잡은거같음.
//   // [ 1,8, 3, 6, 10, 13, 7, 4, 2, 9, 77, 9, 23, 10]

//   // 위 배열에 대해서 절차적으로 수도코드 작성해보자.

//   // answer를 필요한 지점까지 iterate하지 않고 별도의 배열에 값이 정해지지 않은 인덱스를 저장하는이유는?
//   // 조금이라도 더 효율적으로 처리하기 위해서
//   let notDecided = [0];

//   let tempMax = 0;

//   for (let i = 1; i < numbers.length; i++) {
//     // 만약에 해당 값이 더 큰 값이면 지금까지 나온 값들 중에서 안 처리된 값 다 처리한다.
//     // 그리고 초기화. [3,2,1, 7, 1,2,3,] 7 -> 1로 초기화되도록 처리 필요
//     if(numbers[i] > tempMax) {
//       tempMax = numbers[i];

//       for(let j = 0;j < notDecided.length; j++) {
//         if(tempMax > numbers[notDecided[j]]) {
//           answer.
//         }
//       }
//     }
//   }

//   return answer;
// }

// 문제를 풀기 위해서 필요한 요소들부터 생각해보자.

// 가장 간단하게 문제를 풀려면, 매 숫자에 대해서 answer iterate하면서 -1로 처리되어 있는 인덱스에 해당되는 number배열의 숫자를 매 숫자와 비교해서 처리해주면 된다.
// 여기서 어떻게 비효율을 줄일 수 있을까?

// answer를 매번 전체 길이로 iterate하는 것을 방지하면 된다.
// 아직 처리되지 않은 값들을 효율적으로 저장할 구조를 만들면 된다.
// 객체에 값을 저장하고, 제거되어야 하는 키값을 배열에 임시 저장해서 해당 배열 iterate하면서 객체에서 값을 제거한다.

// 값을 저장하는 조건이 뭘까?
// min 값을 정하고, 해당 min값보다 큰 값이 등장하는 경우, 작거나 같은 값인 경우로 나눠서 처리한다.
// 더 작거나 같은 값인 경우, - min값을 업데이트하고 객체에 해당 값을 추가한다.
// 더 큰 값인 경우 - 지금까지 처리되지 않은 값들을 다 처리하고, 해당 값은 처리되지 않은 값들에 추가한다. (min은 해당 값으로 업데이트 한다.)
// 아하 min으로 처리를 안했구나.

// min값ㅇ르 업데이트 시키는 형식이었어야 하는 것 같다.
// 왜냐하면 큰 값이 처리지점이기 때문에, min값을 계속 업데이트 해야함

// function solution3(numbers) {
//   const answer = Array(numbers.length).fill(-1);

//   // 아직 처리되지 않은 값들을 담을 객체
//   let notDecided = {};

//   let min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < numbers.length; i++) {
//     // 더 작거나 같은 값인 경우
//     if (numbers[i] <= min) {
//       notDecided[i] = true; // 결정되지 않은 값들 배열에 값 저장.
//       min = numbers[i];
//     } else {
//       // 더 큰 값인 경우
//       const keysToDelete = [];
//       // 아직 결정되지 않은 키값들을 순회하면서 결정된 키는 제거하기 위해 저장할 배열에 저장
//       for (const key in notDecided) {
//         const notDecidedIdx = Number(key);
//         // 순회 시 key 값이 string으로 처리되므로 number로 변환시켜줘야함.
//         if (numbers[notDecidedIdx] < numbers[i]) {
//           // 아직 처리되지 않은 값이 이번 값보다 더 큰 작은 값이면 처리
//           answer[notDecidedIdx] = numbers[i];
//           // 제거할 배열에 추가
//           keysToDelete.push(key);
//         }
//       }
//       // 제거할 배열의 요소들 제거
//       for (const keyToDelete of keysToDelete) {
//         delete notDecided[keyToDelete];
//       }

//       // 결정되지 않은 키값에 이번 인덱스값 추가
//       notDecided[i] = true;
//     }
//   }

//   return answer;
// }

// console.log(solution3([2, 3, 3, 5]));
// console.log(solution3([9, 1, 5, 3, 6, 2]));

// 테스트 케이스 하나 빼고는 다 통과했는데, 하나가 시간초과가 떠버렸다.

// 그리고 꽤 시간이 오래 걸리는 테스트케이스들이 존재한다.

// 시간 줄일 수 있는 아이디어.
// 굳이 객체에서 값을 지워야 할까?
// 그냥 해당 키 값으로 answer배열 확인하고 -1이 아닌 경우만 처리하게 하면 제거하는 시간이 필요없어진다. 해당 부분 개선해서 다시 실행해보자.
// 기대 효과 - 키에서 제거하기 위해서 iterate하는 시간이 줄어든다. ( 근데 키 값 자체는 유지되니까... 키 값 자체를 그냥 false로 바꿀까. 그래도 iteration시간이 소요되어서 차이가 없을까 잘 모르겠다 해보자)

// function solution4(numbers) {
//   const answer = Array(numbers.length).fill(-1);

//   // 아직 처리되지 않은 값들을 담을 객체
//   let notDecided = {};

//   let min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < numbers.length; i++) {
//     // 더 작거나 같은 값인 경우
//     if (numbers[i] <= min) {
//       notDecided[i] = false; // 결정되지 않은 값들 배열에 값 저장.
//       min = numbers[i];
//     } else {
//       // 더 큰 값인 경우
//       for (const key in notDecided) {
//         // 처리된 경우에는 key에 대한 value를 true로 변경하기 때문에 이를 확인해서 false인 경우에만 처리
//         if (!notDecided[key]) {
//           const notDecidedIdx = Number(key);
//           // 순회 시 key 값이 string으로 처리되므로 number로 변환시켜줘야함.
//           if (numbers[notDecidedIdx] < numbers[i]) {
//             // 아직 처리되지 않은 값이 이번 값보다 더 큰 작은 값이면 처리
//             answer[notDecidedIdx] = numbers[i];
//             // 값을 false로 변경
//             notDecided[key] = true;
//           }
//         }
//       }

//       // 결정되지 않은 키값에 이번 인덱스값 추가
//       notDecided[i] = false;
//     }
//   }

//   return answer;
// }

// 시간이 더 오래 걸린다. 배열 탐색보다 객체 탐색이 더 시간이 오래 걸리는 방법인 듯 함.
// 아니면 Map 으로 처리해볼까?
// 배열에서 지우는 것 자체는 유지하되, Map을 이용해서 처리해보자.

// 그리고 Map을 활용할 때는, iteration 을 하면서 필요한 경우에 값을 지워도 문제가 없다고 한다.
// Map을 활용해서 값을 저장하고, iterate하면서 필요한 경우 바로 제거하는 형태로 개선해보자.
// 그리고 Map은 key로 string뿐만 아니라 어떤 값도 된다고 한다. 그래서 Number변환이 필요없는 것도 살짝 장점.

// function solution5(numbers) {
//   const answer = Array(numbers.length).fill(-1);

//   // 아직 처리되지 않은 값들을 담을 객체
//   let notDecided = new Map();

//   let min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < numbers.length; i++) {
//     // 더 작거나 같은 값인 경우
//     if (numbers[i] <= min) {
//       notDecided.set(i, null); // map에 값 저장, 값은 필요없으므로 null로 처리
//       min = numbers[i];
//     } else {
//       // 더 큰 값인 경우
//       for (const [key, _] of notDecided) {
//         // 처리된 경우에는 key에 대한 value를 true로 변경하기 때문에 이를 확인해서 false인 경우에만 처리

//         // 순회 시 key 값이 string으로 처리되므로 number로 변환시켜줘야함.
//         if (numbers[key] < numbers[i]) {
//           // 아직 처리되지 않은 값이 이번 값보다 더 큰 작은 값이면 처리
//           answer[key] = numbers[i];
//           // Map에서 해당 값 제거
//           notDecided.delete(key);
//         }
//       }

//       // 결정되지 않은 키값에 이번 인덱스값 추가
//       notDecided.set(i, null);
//     }
//   }

//   return answer;
// }

// console.log(solution5([2, 3, 3, 5]));

// 시간 효율이 많이 개선되었음.
// 그래도 테스트케이스 22는 정말 오래 걸리고 있고... 실패했다... 시간초과야 또.

//

// 흠 다시 또 더 개선해보자.ㅣ..

// 정말 오래 걸리는 케이스들이 있는 것 보니 효율 개선보다 아이디어의 개선이 필요한지 모르겠다.

// function solution6(numbers) {
//   const answer = Array(numbers.length).fill(-1);

//   // 아직 처리되지 않은 값들을 담을 객체
//   let notDecided = new Map();

//   let min = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < numbers.length; i++) {
//     // 더 작거나 같은 값인 경우
//     if (numbers[i] <= min) {
//       notDecided.set(i, null); // map에 값 저장, 값은 필요없으므로 null로 처리
//       min = numbers[i];
//     } else {
//       // 더 큰 값인 경우
//       for (const key of notDecided.keys()) {
//         if (numbers[key] < numbers[i]) {
//           // 아직 처리되지 않은 값이 이번 값보다 더 큰 작은 값이면 처리
//           answer[key] = numbers[i];
//           // Map에서 해당 값 제거
//           notDecided.delete(key);
//         }
//       }

//       // 결정되지 않은 키값에 이번 인덱스값 추가
//       notDecided.set(i, null);
//       // min 값이 더 큰 값인 경우 어떻게 처리되어야 하는지?
//       // 해당 값으로 갱신되어어야 한다.
//       // 이게 안돼서 처리가 조금 더 많이 된건가?
//       min = numbers[i];
//     }
//   }

//   return answer;
// }

// 키값만 순회하는 형태로 개선하면?
// 시간 초과.

// 뭐지?
// 음 뭔가 아이디어의 전환이 필요한가 싶은데 잘 모르겠다

// 핵심 아이디어는 stack 자료구조를 활용하는 거였나보다.

// 다른 사람의 답변
function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);

  const stack = [0];

  for (let i = 0; i < numbers.length; i++) {
    // 스택에 요소가 남아있고, 스택에 가장 마지막으로 추가된 요소(인덱스값)이 이번 숫자보다 작으면
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      // 스택에서 pop해서 해당 값의 인덱스 값을 이번 숫자로 처리한다.
      answer[stack.pop()] = numbers[i];
    }
    // 그리고 이번 값은 다시 스택에 push
    stack.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5]));

// 흠...
// 아이디어 자체(처리안된 값을 저장하고 조건 충족 시 해당 값들을 처리)는 결이 맞았는데, 스택 자료구조를 통해서 push pop을 반복하는게 효율이 훨씬 좋다는 점을 전혀 생각하지 못했네 ㅠ

// 스택에 처리 안된 값들 밀어 넣고, 뒤에서부터 하나씩 체크하면서 매번 조건 충족 시 다 빼버린다.
// 모든 numbers의 숫자값에 대해서 스택을 확인해서 뱉는 처리를 함.
// 매번 확인을 하니까 해당 값보다 작은 값에 대해서는 일단 다 처리가 된다. 그리고 큰 값이 잇었다면 앞단에서 처리가 되었음.

// Stack!!!

// 왜 Stack으로도 풀어낼 수 있는 걸까??

// Stack이 성립할 수 있으려면 아래 같은 스택이 생성되지 않아야 함을 알아야 한다고 생각하였다.

const stack = [10, 11, 8, 9];

// 왜? 이 형태에서 10은 이미 11로 값이 처리되었어야 하기 때문

// 그러면 이 코드 형태에서 위 같은 스택이 생길일이 없는가?

// 왜?

// 앞단에서 특정 숫자 스택보다 작은 숫자는 처리가 되었을 것이다.
// 즉 스택 자체에는 숫자가 내림차순으로 쌓일 수 밖에 없음.

// 일반화해서 이해하지 못했기 때문에 다음에 적용하지 못한다.
