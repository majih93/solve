// 169. Majority element

// 숫자 배열에서 과반수 이상을 차지하는 요소를 구하는 문제

// 가장 단순하게 생각해서, 숫자별로 counting 을 하고, n/2 이상인 숫자가 등장한 경우 해당 숫자를 return 하는 방법이 있다.

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  const numMap = new Map();

  const majorityCount = Math.floor(nums.length / 2) + 1;

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      if (numMap.get(nums[i]) + 1 >= majorityCount) return nums[i];

      numMap.set(nums[i], numMap.get(nums[i]) + 1);
    } else {
      numMap.set(nums[i], 1);
    }
  }
};

// 그런데 O(1) 로 풀어내는 것이 follow up 문제인데... 어떻게 O(1) 로 풀어낼수 있을까?
// 시간 복잡도는 linear 한 상태이다.
