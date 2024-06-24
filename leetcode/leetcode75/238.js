// 238. Product of Array Except Self

// 모르겠다.
// 제약조건을 충족하는 법을 찾지 못해서 동영상 강의를 참고하였음..

// 일단 brute force 방식을 사용하면 모든 경우를 iterate하면서 답을 찾을 수 있다.

// 하지만 이는 비효율이 있음. O(n^2) 시간이 소요된다. 각 요소에 대해서 해당 요소를 뺀 나머지 요소들의 곱을 구하는 연산이 수행되어야 하기 때문에.

// 어디에서 비효율이 발생하는지 파악하는 식으로 접근하는 것이 인상적이다.

// 특정한 요소에 대해서 구해야 하는 값은, 해당 요소의 좌측에 있는 요소들과 우측의 있는 요소들의 곱이다.

// 좌측에 있는 요소들을 매번 계산할 필요 없이, 우측으로 이동하면서 좌측의 계산된 값이 새로운 값을 곱하면 된다.
// 즉 이전 계산의 결과값을 활용하는 형태로 코드를 작성하는것

var productExceptSelf = function (nums) {
  // 각 요소의 좌측곱들을 담을 배열과 우측곱들을 담을 배열
  const left = Array(nums.length).fill(1);
  const right = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    const leftIdx = i;
    const rightIdx = nums.length - 1 - i;

    if (leftIdx >= 1) {
      left[leftIdx] = left[leftIdx - 1] * nums[i - 1];
    }

    if (rightIdx <= nums.length - 2) {
      right[rightIdx] = right[rightIdx + 1] * nums[rightIdx + 1];
    }
  }

  return left.map((el, idx) => el * right[idx]);
};

console.log(productExceptSelf([2, 3, 1, 4, 5]));
