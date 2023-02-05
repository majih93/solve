function solution(common) {
  let firstGap = common[1] - common[0];
  let secondGap = common[2] - common[1];

  if (firstGap === secondGap) {
    return common[common.length - 1] + firstGap;
  } else {
    return (common[common.length - 1] * secondGap) / firstGap;
  }
}
