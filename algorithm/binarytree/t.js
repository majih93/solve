// root -> node that has no parent
// leaf -> node that has no children

// binary tree is a tree in which every node has at the most two children (can have less than two children)

// for most cases, binary trees are considered to have a single root node

// for every root - node , there should be only 1 path

// Code implementation

// node 의 형태
// value + 자식 노드 값으로 구성 (left child, right child)
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// node 생성
const a = new Node("a");
const c = new Node("c");
const b = new Node("b");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// 트리 형태 지정
a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

// 아래 구조의 tree 구성
//      a
//     / \
//    b   c
//   / \    \
//  d  e     f

// stack 을 이용해서 tree 구조를 depth first traverse 하는 방법 (iterative way)

// const depthFirstValues = (root) => {
//   // 빈 tree 에 대해서 처리 필요
//   if (root === null) return [];

//   const stack = [root]; // 스택으로 사용할 데이터

//   const result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     // console.log(current.val);
//     result.push(current);

//     // if (current.left) stack.push(current.left);
//     // if (current.right) stack.push(current.right);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return result;
// };

// const result = depthFirstValues(a); // a - c - f - b - e - d

// console.log(result);

// 왜 순서가 좌에서 우가 아니라 우에서 좌가 되었을까?
// 강의에서 듣기 전에 코드와 연관지어서 파악해보자.

// a -> [b, c] -> c 가 먼저 pop 되고, [b, f] -> f pop 되고 더해지지 않음 -> b pop, [d, e] -> e -> d pop

// 음 그러면 반대 순서로 제대로 순회되도록 처리하려면 어떻게 코드를 변경해야 하는지?

// 먼저 처리하고 싶은 node 를 나중에 스택에 추가하는 형태로 변경하면 된다.

// ----------

// recursive way

const depthFirstValues = (root) => {
  if (root === null) return [];

  const result = [];

  // 어떻게 재귀적으로 돌면서 체크를 할 수 있을까?
  // 결과, root 에 대해서 주어진 정보에 대해서, root 가 없을 때 까지 돌아야 한다.
  // a에 대해서 함수 실행, -> b에 대해서 함수 실행 -> d -> 종료, e-> 종료 이런 형태로 조건이 처리가 되어야 함
  const rec = (node) => {
    result.push(node.val);
    if (node.right || node.left) {
      // 왼쪽부터 탐색해야 한다.
      if (node.left) rec(node.left);
      if (node.right) rec(node.right);
    }
  };

  rec(a);

  return result;
};

// const result = depthFirstValues(a);

// console.log(result);

// 오 재귀함수 혼자서 만들었다 복잡한 문제는 아니지만 좀 늘었네 ㅎㅎ

// 강의 버전
// 새로운 rec 함수를 만드는 것이 아니라, depthFirstValues 함수 자체를 재귀적으로 수행
const lecture_version = (root) => {
  if (root === null) return [];

  const leftValues = lecture_version(root.left); // [b,d,e]
  const rightValues = lecture_version(root.right); // [c, f]

  return [root.val, ...leftValues, ...rightValues];
};

const lecture_result = lecture_version(a);

// 와 근데 implementation 차이가 엄청 나네..

// 어떤 점에 착안한걸까

// 재귀적으로 쌓아서 return 하는 형태로 처리한 것
// a -> b 에 대해서 함수 실행 stack 에 a 에대해서 처리 보류 중임 (재귀적으로 누적된 값이 쌓여서 반환되는 것을 받아서 처리)
// -> b는 d에 대해서 함수 실행 stack 에 b 함수 실행이 보류 중
// -> d는 [d] 를 반환 (자식이 없으므로 실행된 함수에 대해서 빈 배열 반환)
// b의 right 함수 실행
// e 반환

// b함수는 [b, d, e] 반환

// a의 right 함수 실행

// 같은 로직으로 [c, f] 반환

// [a, ...[b,d,e], ...[c,f]] 형태로 처리
