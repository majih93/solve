// 가위바위보

// for문안에서 두 개의 배열값 각각비교해서처리하면 될 듯

// 가위바위보 결과 판별하는 함수
function decideWinner(Anumber, Bnumber) {
  if (Anumber === Bnumber) return "D";

  if (Anumber === 1) {
    if (Bnumber === 2) {
      return "B";
    } else {
      return "A";
    }
  } else if (Anumber === 2) {
    if (Bnumber === 3) {
      return "B";
    } else {
      return "A";
    }
  } else if (Anumber === 3) {
    if (Bnumber === 1) {
      return "B";
    } else {
      return "A";
    }
  }
}

function solution(N, Aarr, Barr) {
  let answer = [];

  for (let i = 0; i < N; i++) {
    answer.push(decideWinner(Aarr[i], Barr[i]));
  }

  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); //[ 'A', 'B', 'A', 'B', 'D' ]

// 모든 경우의 수 포함시키는 방법을 잘 생각하자.
