// 623. Add One Row to Tree

// 주어진 depth-1 위치에 있는 각 node에 대해서 val을 값으로 가지는 새로운 node를 삽입
// 기존 node들은 새로운 node에 각 Left/right에 대응되는 위치에 붙이도록.

// depth 가 1인 경우 -> 새로운 노드를 만들고 해당 노드를
// depth 가 1이 아닌 경우
//// depth에 다다를 때까지

function addOneRow(root, val, depth) {
  if (depth === 1) {
    const newRoot = { val: val, left: root, right: null };
    return newRoot;
  }

  function dfs(node, d) {
    if (node.right === null && node.left === null) {
      if (d === depth - 1) {
        node.right = { val: val, left: null, right: null };
        node.left = { val: val, left: null, right: null };
      }

      return;
    } else {
      if (d === depth - 1) {
        const originalRight = node.right;
        const originalLeft = node.left;

        node.left = { val: val, right: null, left: originalLeft };
        node.right = { val: val, right: originalRight, left: null };

        return;
      } else {
        if (node.right) dfs(node.right, d + 1);
        if (node.left) dfs(node.left, d + 1);
      }
    }
  }

  dfs(root, 1);

  return root;
}

// 수행되어야 하는 작업

// root
// 2 /6에 대해서 dfs 실행
// dfs(2, 1) dfs(6, 1)

// depth가 1이므로, 첫 번째 요소에다가 달아야 한다. 이게 포인트네.

// 오!! 풀었다!!!!

// 이야..

// 심지어 마지막에 depth가 leaf node인 경우까지 고려를 했음.

// 그래도 조금씩 분명히 이해도가 올라가고 있고만.
