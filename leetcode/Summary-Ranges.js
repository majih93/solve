// Summary ranges

var summaryRanges = function (nums) {
  let answer = [];

  if (nums.length === 1) return `${nums[0]}`;

  const getString = (rangeArr) => {
    if (rangeArr.length === 1) return `${rangeArr[0]}`;
    return `${rangeArr[0]}->${rangeArr[1]}`;
  };

  const leng = nums.length;

  let curIndex = 0;
  let range = [];

  while (curIndex < leng) {
    console.log(range);
    if (curIndex === leng - 1) {
      if (nums[curIndex] === nums[curIndex - 1] + 1) {
        range.push(nums[curIndex]);
        answer.push(getString(range));
      } else {
        if (range[0] !== nums[curIndex - 1]) {
          range.push(nums[curIndex - 1]);
        }
        answer.push(getString(range));
        answer.push(`${nums[curIndex]}`);
      }

      break;
    } else {
      if (range.length === 0) {
        range.push(nums[curIndex]);
        curIndex++;
      } else {
        // 이전 숫자와 이번 숫자 비교
        if (nums[curIndex] === nums[curIndex - 1] + 1) {
          // 연속된 숫자인 경우
          curIndex++;
        } else {
          if (range[0] !== nums[curIndex - 1]) {
            range.push(nums[curIndex - 1]);
          }

          answer.push(getString(range));
          range = [];
        }
      }
    }
  }

  return answer;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
