// 풀이 전략

/**
 * 문자가 () 중 하나인 경우 스택관련 처리
 * 아닌 경우, 스택이 비어있는 경우에만 answer+=문자
 * 무조건 열린 괄호는 닫힌다고 생각하고 구현하였음
 */

function solution(str) {
  let answer = "";

  let stack = [];

  for (let x of str) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        answer += x;
      }
    }
  }

  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); // EFLM

// 선생님 풀이
/**
 * 모든 걸 stack 에 일단 push 해서 처리하는 것으로 생각
 * 반복분기 문자값이 ) 인 경우, ( 를 만날 때까지 stack 에서 pop (해당 로직으로 괄호안 문자를 제거)
 */

function tSol(str) {
  let answer;

  let stack = [];

  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }

  answer = stack.join("");

  return answer;
}

console.log(tSol("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
