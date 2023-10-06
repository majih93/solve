// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  // 포함되어 있는지 여부를 확인하기 위해서 매번 확인하기 보다는
  // 자료구조로 만들어서 처리
  let answer = 0;

  // map 으로 만들기
  const jewelMap = new Map();

  for (let x of jewels) {
    jewelMap.set(x, 1);
  }

  for (let x of stones) {
    if (jewelMap.has(x)) answer++;
  }

  return answer;
};
