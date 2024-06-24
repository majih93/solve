// 237. Delete Node in a Linked List

// Linked List에서 삭제할 노드가 주어졌을 때, 해당 노드를 삭제한다.

// 특이한 제약조건이 있는데, 전체 List는 주어지지 않음.
// 주어진 노드 본인을 삭제해라? 같은 개념의 문제인데....

// 힌트를 얻어서 풀었음.

// 현재 노드에, 다음 노드를 복제하면 됨.

// 그러면 자연스럽게 현재 노드가 사라지는 효과가 난다.

// val을 다음 노드의 값으로, 그리고 노드의 next를 다음 노드의 next로 변경

// 코드 자체는 간단하지만 발상이 필요한 문제였음.

var deleteNode = function (node) {
  // copy the next node to the current node
  node.val = node.next.val;
  node.next = node.next.next;
};
