// 1614. Maximum Nesting Depth of the Parentheses

var maxDepths = function (s) {
  // s는 VPS인것이 보장된 input
  // stack을 활용해서 관리하고 숫자를 정해서 stack이 채워진 이후에 비지 않는 범위 내에서 여는 괄호 입력 시 count++ 해서 괄호 개수 count
  // stack이 다 비워지면 count와 기존 count를 비교해서 더 큰 숫자로 answer를 업데이트 해가는 형태로 구현
  let answer = 0;
  const stack = [];
  let tempCount = 0;

  for (const ch of s) {
    // (인 경우
    if (ch === "(") {
      // Stack이 비어있으면 새롭게 시작하는 vps라는 의미
      stack.push(ch);
      tempCount++;
    } else if (ch === ")") {
      stack.pop();
      // stack이 다 비었으면 count를 시작.
      if (!stack.length) {
        answer = Math.max(answer, tempCount);
        // count 초기화
        tempCount = 0;
      } else {
        tempCount--;
      }
    }
  }

  return answer;
};

// 1차 시도 실패

// 원인은, 무조건 stack이 빌때까지 최대 nested를 세면 안된다.

// (()(())) 이런 경우 내가 한 방식으로는 최대 뎁스가 4이지만, 실제로는 3이다.

// 아직 stack의 처리가 끝나지 않은 경우 tempCount에서 -- 해줘야 하는건가?

// 하나의 범위 안에서 )가 끝났다는게 무슨 의미가 되는가?
// 현재 시점까지 존재했던 (들의 뎁스를 가지고 있는 처리가 하나가 되어야 한다는 의미겠네)
// (()())

// tempCount는 여는 시점에 ++하고 닫는 시점에-- 한다. 그리고 닫을 때?
// 어떤 시점에 유의미한 데이터가 뭘까?
// 뎁스2는 확정이고, 닫는 순간 전체 뎁스는 다시 1이된다.

// 현재 전체 뎁스 -> 배열의 길이
// 지금까지 최대 뎁스 -> 숫자를 저장. (닫는 시점에 숫자를 업데이트 하면 된다.)
function maxDepth(s) {
  let result = 0;

  const stack = [];
  let tempCurDepth = 0;
  let tempMaxDepth = 0;

  for (const ch of s) {
    // ( 인 경우
    if (ch === "(") {
      // 스택이 빈 경우 시작하는 지점이다.
      if (!stack.length) {
        stack.push(ch);
        tempCurDepth = 1;
        tempMaxDepth = 1;
      } else {
        // 이미 존재하는 경우
        stack.push(ch);
        tempCurDepth++;
        tempMaxDepth = Math.max(tempMaxDepth, stack.length);
      }
    } else if (ch === ")") {
      // pop한 이후에 스택이 빈 경우와 아닌 경우
      stack.pop();
      if (!stack.length) {
        // max를 처리
        result = Math.max(result, tempMaxDepth);
      } else {
        // 비지 않은 경우는 tempCurDepth--
        tempCurDepth--;
      }
    }
  }

  return result;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
