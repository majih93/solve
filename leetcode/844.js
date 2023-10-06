// 844. Backspace String Compare
// 자연스럽게 stack 구조를 생각해서 코드를 짰다는 점,
// 별도의 함수를 선언해서 로직을 분리할 분기를 찾았다는 점
// 좋았다고 생각됨

var backspaceCompare = function (s, t) {
  function deleteBackspaces(string) {
    let letters = [];

    for (let x of string) {
      if (x === "#") letters.pop();
      else letters.push(x);
    }

    return letters.join();
  }

  const firstWord = deleteBackspaces(s);
  const secondWord = deleteBackspaces(t);

  return firstWord === secondWord;
};
