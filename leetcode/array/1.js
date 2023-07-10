//  Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  const numsSet = new Set(nums);

  const uniqueArr = Array.from(numsSet);

  for (let i = 0; i < uniqueArr.length; i++) {
    nums[i] = uniqueArr[i];
  }

  return uniqueArr.length;
};

console.log(removeDuplicates([1, 1, 2]));

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const arr = [1, 2, 3];

// 바로 다른 배열을 할당할 수 없음
// Assignment to constant variable.

// 배열의 요소를 바꾸는 형태로 동작해야된다.
console.log(typeof arr); // object
// 배열 또한 객체 취급이므로, 메모리에 참조주소가 저장됨

// javascript arrays
