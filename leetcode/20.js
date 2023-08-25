// 20. valid parentheses

// valid 하기 위한 세 가지 조건

// 1. 열린 괄호는 같은 종류의 괄호로 닫혀야 함.
// 2. 닫는 괄호가 여는 괄호보다 앞에 있으면 안됨.
// 3. 닫는 괄호는 무조건 여는 괄호 짝이 있어야 함.

// 괄호별로 stack 만들고, pop/push 하면서 하나의 string iterate 했을 때, 세 배열이 모두 비어있으면 valid 로 간주할 수 있음

function solution(s) {
  const stack1 = []; // for ()
  const stack2 = []; // for {}
  const stack3 = []; // for []

  for (let x of s) {
    if (x === "(") stack1.push(x);
    if (x === ")") {
      if (stack1.length === 0) return false;
      stack1.pop();
    }

    if (x === "{") stack2.push(x);
    if (x === "}") {
      if (stack2.length === 0) return false;
      stack2.pop();
    }

    if (x === "[") stack3.push(x);
    if (x === "]") {
      if (stack3.length === 0) return false;
      stack3.pop();
    }
  }

  if (stack1.length === 0 && stack2.length === 0 && stack3.length === 0) {
    return true;
  }

  return false;
}

// console.log(solution("([)]")); // expected false, but returns true

// 무조건 순서가 맞아야 한다. [()]  ok, ([)] false

function solution_2(s) {
  const stack = [];

  for (let x of s) {
    if (x === "(" || x === "{" || x === "[") stack.push(x);
    else {
      // 개선점 1 - 닫는 괄호인 경우, stack 이 비어있으면 애초에 무효함.
      // 이렇게만 개선해도 많이 좋아진다.
      if (stack.length === 0) return false;

      if (x === ")") {
        if (stack[stack.length - 1] !== "(") return false;
        else stack.pop();
      }

      if (x === "}") {
        if (stack[stack.length - 1] !== "{") return false;
        else stack.pop();
      }

      if (x === "]") {
        if (stack[stack.length - 1] !== "[") return false;
        else stack.pop();
      }
    }
  }

  if (stack.length === 0) return true;

  return false;
}

console.log(solution_2("(())")); // ok 풀었음

// 그런데 뭔가 코드가 마음에 안들어... 어떻게 개선할 수 있을까?
