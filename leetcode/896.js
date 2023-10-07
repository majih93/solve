// 896. Monotonic Array

const solution = (nums) => {
  if (nums.length === 1) return true;
  // 필요한 작업 -> 오름차순인지 체크
  // pointer
  // 그냥 양수 음수 여부 체크해서 이전이랑 똑같지 않으면 처리하면 되는거 아님?
  const checkNumberSign = (prevNumber, currentNumber) => {
    if (prevNumber - currentNumber === 0) return;

    if (prevNumber - currentNumber > 0) return "+";
    return "-";
  };

  let prevNumber = nums[0]; // 이전 숫자
  let prevSign = null;

  for (let x of nums) {
    // 같은 수인 경우 판별 x
    if (prevNumber === x) continue;

    // 부호 확인
    const tempSign = checkNumberSign(prevNumber, x);

    // 부호 지정되지 않은상태라면 부호 지정
    if (!prevSign) prevSign = tempSign;

    // 이전에 처리된 부호와 이번 부호 맞지 않으면 false
    if (tempSign !== prevSign) return false;

    // prevNumber 업데이트
    prevNumber = x;
  }

  return true;
};

const answer = solution([6, 5, 7, 4]);

console.log(answer);
