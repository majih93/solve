// daily challenge
// 41. First Missing Positive
// 다 iterate해서 가장 큰 정수, 가장 작은 정수를 찾는다.

// 그리고 가장 큰 양의 정수와 가장 작은 양의 정수를 이용해서 답을 찾는다.

// 가장 작은 양의 정수가 1인 경우,
// 가장 큰 양의 정수 값에 따라서 값이 결정된다.

// 가장 큰 양의 정수도 1인 경우, 2를 반환
// 가장 큰 양의 정수가 2인 경우 -> 3을 반환
// 3이상인 경우 -> 2를 반환

// 아닌 경우
// -> 가장 작은 양의 정수보다 하나 작은 값을 반환한다.

// 모든 수가 음수인 경우의 수도 고려해야 한다.
var firstMissingPositive = function (nums) {
  // o(n) 이고 상수 공간을 활용해야 한다.
  let min = 0;
  let max = 0;

  // 양의 정수를 만났을 때만 처리하면 된다.

  for (const num of nums) {
    if (num > 0) {
      if (min === 0 || num < min) {
        min = num;
      }

      if (num > max) {
        max = num;
      }
    }
  }

  // 양의 정수가 없거나 최소값이 1보다 큰 양의 정수인 경우
  if (min === 0 || min > 1) return 1;

  // 최소값이 1인 경우
  if (min === 1) {
    if (max === 1) return 2;
    if (max === 2) return 3;
    return 2;
  }
};

// console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 3
// console.log(firstMissingPositive([1, 2, 0])); // 3
// console.log(firstMissingPositive([3, 4, -1, 1])); // 3

// 음 전혀 고려 못한 경우의 수가 있네

// [1,2,3,4,5,6]
// 이런 식의 데이터인 경우에는 어떡해?
// min = 1, max = 6이라서 2를 반환하는데 답은 7임
// unsorted
// smallest positive integer

// Non-constant space를 쓴다고 하면??
function solution(nums) {
  const positiveIntegers = [];

  for (const num of nums) {
    if (num > 0 && positiveIntegers[num] === undefined) {
      positiveIntegers[num] = 1;
    }
  }

  if (positiveIntegers.length === 0) return 1;

  for (let i = 1; i < positiveIntegers.length; i++) {
    if (positiveIntegers[i] === undefined) {
      return i;
    }
  }

  return positiveIntegers.length;
}

// 이걸 어떻게 constant space로 바꿀 수 있을까?
