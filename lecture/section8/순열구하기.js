// 순열구하기

// 풀이 전략

// 재귀 + for 문으로 풀면 되지 않을까 싶음 기존과 동일한 로직으로 보인다.

// function solution(numArr, r) {
//   let answer = 0;

//   const subset = Array(r).fill(0);

//   function DFS(L) {
//     // 종료 조건
//     if (L === r) {
//       answer++;
//     } else {
//       for (let i = 0; i < r; i++) {
//         subset[i] = numArr[i];
//         DFS();
//       }
//     }
//   }

//   DFS(0);

//   return answer;
// }

// solution([3, 6, 9], 2);

// 조금 다른 부분이 있다.
// 중복 여부를 체크해주면서 앞에서 사용한 숫자는 사용하지 않도록 하는 체크가 필요함

function lecture_solution(numArr, r) {
  let answer = 0;

  // 해당 숫자를 이용했는지 여부 확인하는 함수
  // 필요한 경우마다 초기화가 되어야 한다.
  const ch = Array(numArr.length).fill(0);
  const tmp = Array(r).fill(0);

  function DFS(L) {
    if (L === r) {
      answer++;
    } else {
      // 주어진 숫자 배열의 값을 다 처리하기는 해야되는데, 이 때 사용했던 값은 다시 사용하면 안되므로 ch 배열을 통해서 사용여부를 저장한다.
      // ch 배열은 마지막 노드에 도달해서 처리된 이후에 다시 부모 노드로 돌아가는 경우 해당 숫자 사용 여부에 대해서는 초기화가 되어야 한다.

      for (let i = 0; i < numArr.length; i++) {
        if (ch[i] === 0) {
          // 아직 사용한 적이 없는 숫자인 경우
          ch[i] = 1;
          tmp[L] = numArr[i];
          DFS(L + 1);
          ch[i] = 0;

          // ch[i] = 1;
          // tmp[L] = numArr[i];
          // DFS(L + 1);
          // ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  console.log(answer);

  return answer;
}

// 순열 조합 같은 기본적인 로직들은 이해를 바탕으로 거의 뭐 외운다고 생각해야 한다.

// 매일 한번씩 해보면 되지 않을까?

lecture_solution([3, 6, 9], 2);

function solution2(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];

// console.log(solution2(2, arr));
