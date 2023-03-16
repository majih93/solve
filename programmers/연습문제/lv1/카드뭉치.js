// 카드 뭉치

function mySol(cards1, cards2, goal) {
  // goal 단어 배열 탐색

  for (let word of goal) {
    if (word === cards1[0]) {
      cards1.shift();
    } else if (word === cards2[0]) {
      cards2.shift();
    } else {
      return "NO";
    }
  }

  return "YES";
}

console.log(
  mySol(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

console.log(
  mySol(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

let arr = [0];

arr.shift();

console.log(arr);

arr.shift();

console.log(arr);
