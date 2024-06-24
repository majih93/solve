// 129. Sum Root to Leaf Numbers

// 재귀로직으로 풀어낼 수 있을 것 같다.
// 이전 node와, 합을 받아서
// 종료조건 - node에 더이상 자식이 없는 경우
// 총 합에 leaf까지의 합을 더해준다.
// 아닌 경우 -> left, right에 대해서 각각 한 번씩 함수를 호출한다.
function sumNumbers(root) {
  let result = 0;

  // result에 더하는 처리를 하기 때문에, return이 없어도 된다는 점.
  function dfs(node, sumString) {
    if (node.right === null && node.left === null) {
      const finalSumString = sumString + `${node.val}`;

      result += Number(finalSumString);
    } else {
      const nextString = sumString + `${node.val}`;

      if (node.left !== null) {
        dfs(node.left, nextString);
      }

      if (node.right !== null) {
        dfs(node.right, nextString);
      }
    }
  }

  dfs(root, "");

  return result;
}

console.log(
  sumNumbers({ val: 0, left: { val: 1, right: null, left: null }, right: null })
);
