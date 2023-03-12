// 문제 풀이 전략

/**
 * 배열에 넣고, 쌍이 맞으면 pop, 아니면 push 하는 형태로
 * 마지막 괄호를 처리했을 때, stack 에 남아있는 요소가 있으면 NO
 *
 */

function solution(str) {
  let answer = "YES";

  let stack = [];

  for (let x of str) {
    // ( 인 경우
    if (x === "(") {
      stack.push(x);
    } else {
      // 스택에 마지막 요소가 ( 인 경우 pop
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }

  if (stack.length != 0) answer = "NO";

  return answer;
}

console.log(solution("(()(()))(()")); // NO
