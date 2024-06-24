// 442. Find All Duplicates in an Array
// 어제랑 비슷한 문제가 나오네.
// 중요한 포인트는 데이터를 상태를 적절히 저장해두고 처리하는 것이다.

var findDuplicates = function (nums) {
  // similar
  // 마찬가지로 값을 저장할 배열을 가지고 처리하면 된다.
  const answer = [];

  const isDuplicate = Array(nums.length + 1).fill(0);

  // for loop으로 각 요소 돌면서, 값을 음수로 처리한다.
  for (let i = 0; i < nums.length; i++) {
    if (isDuplicate[nums[i]] === 1) {
      answer.push(nums[i]);
    } else {
      isDuplicate[nums[i]] = 1;
    }
  }

  return answer;
};
