// 1249. Minimum Remove to Make Valid Parentheses

// 스택으로 풀어야할 것 같음.
// ( 없이 등장한 ) 제거,
// 스택이 비었는데 등장한 ) 제거
// 별다르게 더 생각할 부분은 없는 것으로 생각됨

// ++ iteration 종료 후 stack에 값이 남아있는 경우, 해당 값에 대한 처리 방법도 고민되어야 함.
// ++ 위치 저장하고, 뒤에서부터 제거하자ㅏ.
// ++ -> 해봤는데 위치가 달라질 수 있음. 항상 그 위치가 고정이 안됨
// ++ 음 한 번 처리한 string에 대해서 뒤에서부터 다시 돌면서 반대 처리를 해야하나?
//

var minRemoveToMakeValid = function (s) {
  let result = "";
  const stack = [];

  for (const ch of s) {
    // stack 상태에 따라 다르게 판단
    if (ch === "(") {
      result += ch;
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length) {
        stack.pop();
        result += ch;
      }
    } else {
      result += ch;
    }
  }

  // stack에 괄호 남은 경우 재처리 필요
  if (stack.length) {
    let finalResult = "";
    const revStack = [];

    // 뒤에서부터 순회하면서 처리
    for (let i = result.length - 1; i >= 0; i--) {
      const ch = result[i];
      // stack 상태에 따라 다르게 판단
      if (ch === ")") {
        finalResult = ch + finalResult;
        revStack.push(ch);
      } else if (ch === "(") {
        console.log("case");
        if (revStack.length) {
          revStack.pop();
          finalResult = ch + finalResult;
        }
        console.log(finalResult);
      } else {
        finalResult = ch + finalResult;
      }
    }

    result = finalResult;
  }

  return result;
};

// 풀었는데 한 가지 아쉬운 점
