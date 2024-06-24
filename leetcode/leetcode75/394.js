// 394. Decode String

// String을 decode하는 문제
// 숫자[encoded_string] 형태의 데이터를 어떻게 처리해서 잘 이어지게 할 것인가?
function getType(ch) {
  if (ch === "[" || ch === "]") {
    return "bracket";
  }

  if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
    return "letter";
  }

  return "number";
  // if (typeof Number(ch) === "number" && !Number.isNaN(Number(ch))) {
  // }
  // return "bracket";
}

function decodeString(s) {
  // stack에 넣어가면서 처리를 해야될 것 같음.

  const stack = [];

  for (let ch of s) {
    // 어떤 문자이냐에 따라서 처리가 달라져야 하는데,
    // 일단 닫는 bracket이면 숫자에 대해서 반복 처리가 되어야 한다.
    // 닫는 bracket인 경우, pop을 하면서 값을 처리하는데, 처리해서 push를 다시 해야함
    // pop을 하면서 string을 거꾸로 받아서 String이 아닐때까지 처리가 되어야 함.
    // 기타 경우에는 push
    if (ch === "]") {
      let tempString = "";
      // 숫자 될때까지 pop
      while (stack.at(-1) !== "[") {
        const tempCh = stack.pop();
        tempString = tempCh + tempString;
      }
      stack.pop(); // [ 제거

      let count = "";
      // 숫자를 같이 처리
      while (stack.length && getType(stack.at(-1)) === "number") {
        count = stack.pop() + count;
      }
      tempString = tempString.repeat(count);
      stack.push(tempString);
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
}

// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("100[leetcode]"));

// 이 문제를 풀면서 놓쳤던 점.
// 숫자가 두 자리 이상인 케이스에 대해서 고려하지 않고 한 자리인 경우만 생각해서 pop()을 한번만 처리함
// while문으로 숫자도 다 처리하는 형태로 구현하니 되었다
