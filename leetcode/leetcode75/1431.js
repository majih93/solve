// 1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  const answer = [];

  // extraCandies를 더하기 전 최대값을 구한다.
  const initialMaxCandyCount = Math.max(...candies);

  // 각 아이별로 가지고 있던 사탕 갯수에 extraCandies 값을 더했을 때 기존 최대값보다 크거나 같은지 확인해서 처리한다.
  for (const kidCandyCount of candies) {
    if (kidCandyCount + extraCandies >= initialMaxCandyCount) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
};
