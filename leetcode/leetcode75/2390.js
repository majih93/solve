// 2390. Removing Stars From a String

// Stack을 활용해서 풀어보자.

// string에 대해서, 만약에 값이 star라면 왼쪽에 있는 값과 star를 제거해라.

// star가 다 제거된 값을 반환해라.

// 굉장히 노골적으로 stack을 활용해서 값을 처리하도록 되어있는 문제구만..

// stack을 만들고 string을 iterate하면서
// 이번 값이 *인 경우 stack에서 pop처리하고 값이 *이 아닌 경우 값을 push하면 되는 형태이다.

var removeStars = function (s) {
  const stack = [];

  for (const ch of s) {
    if (ch === "*") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
};

// 오 이제 풀고 점검도 하네? 좋다 좋아 나아지고 있구나. 앞으로도 이런 부분은 이어나가자.

console.log(removeStars("leet**cod*e"));

// 오 점검하니까 내가 실수한 부분이 확실히 있었음!!!!
