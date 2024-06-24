// 287. Find the Duplicate Number
function findDuplicate(nums) {
  const isRepeated = Array(nums.length).fill(0);

  // 1,2,3,4 라고 생각하고 돌면서 count
  // 1을
  for (let i = 0; i < nums.length; i++) {
    if (isRepeated[nums[i]] === 0) {
      isRepeated[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

// 그래도 생각한대로 문제를 풀어내고 있다.

// Set을 이용한 풀이도 있다.
// 아이디어 자체에 대해서 인지하고 있자.
function findDuplicateWithSet(nums) {
  const duplicates = new Set();

  for (const num of nums) {
    if (duplicates.has(num)) {
      return num;
    }

    duplicates.add(num);
  }
}

console.log(findDuplicateWithSet([1, 3, 4, 2, 2])); // 2

// 또 다른 풀이
// 원본 배열을 mutate하면 안된다는 조건을 없다면 가능한 풀이
// 원본 배열을 데이터 저장소로 활용하는 형태. (처음 탐색 시 음수로 변경하고 다시 음수 참조 시 해당 숫자로 처리)
var findDuplicate3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let ind = Math.abs(nums[i]);
    if (nums[ind] < 0) {
      return ind;
    }
    nums[ind] = -nums[ind];
  }
  return -1;
};
