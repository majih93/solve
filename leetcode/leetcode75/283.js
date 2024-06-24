// 283. Move Zeroes
// why is this in the two pointer 영역
// copy of the array
// in-place
// 새로운 배열을 만들지 않고 구현되어야 한다.
// 흠...
// a pointer to iterate the arr
// another to deal with 0 elements
// 일단 다른 배열을 하려면 어떻게 되어야 하는가?
// 아하 하나는 뒤로 보내고 하나는 앞으로 해서 처리하면 되겠네
// 자리를 바꾸는 형태로 가보자 바꿔야 하는 위치는 따로 알아보고
// 0을 보내야하는 위치를 파악하는 포인터 하나, 배열을 iterate하는 pointer하나,
// 두 번째 포인터가 배열의 가장 마지막으로 이동한 경우 끝내면 됨

var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 1;

  while (p1 < nums.length) {
    // p1은 현재 탐색중인 배열 요소
    // p2는 가장 마지막으로 0으로 변경된 위치
    // 가장 마지막으로 0으로 변경된 위치가
    if (nums[p1] === 0) {
      while (p2 < nums.length) {
        if (nums[p2] !== 0) {
          [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
          console.log(nums);
          break;
        } else {
          p2++;
        }
      }
    }
    p1++;
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1]));
// console.log(moveZeroes([0]));
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));

// time limit exceeded error 발생
// p2를 적절히 처리하지 못해서 발생한 문제

// 제대로 처리안됨
// -> p1이 0인 경우, p2탐색 시작 위치를 조정시키는 처리를 빼먹음
// -> p2 위치를 p1 다음 요소부터 탐색되도록 처리해야된다.

// 다른 사람 풀이 참고

// 흠 무슨 발상인지 이해해보자.

// 기본 개념 -> 0이 아닌 요소의 위치를 가장 빠른 0이 위치한 위치와 교환한다.
var moveZeroes2 = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }

  return nums;
};

// left는 첫 번째 요소에서 시작,

// right 0에서 시작

// right는 배열 순회

// 이동하면서 0이 아닌 경우 left와 자리교환.

// left를 이동

// left도 1
//

// [4,2,4,0,0,3]

// 이러면 left는 3이고, right는 6일 때,

// 교환된다.

// left는 그러면 어디

// left는 foremost 0에 위치하게 된다.

// 확실히 시간이 빠르다 왜냐하면 for문 하나만 굴리는 형태로 처리되기 때문에 while을 이중으로 처리할 필요가 없음
