// 귤 고르기

// Map 으로 풀어볼 수 있을지에 대한 POC

function mySol(k, tangerine) {
  let answer = 0;
  let sum = 0; // 귤 개수 담을 변수

  // 데이터 담을 Map
  let countData = new Map();

  for (let x of tangerine) {
    // map 에 있으면 추가
    if (countData.has(x)) {
      countData.set(x, countData.get(x) + 1);
    } else {
      countData.set(x, 1);
    }
  }

  const sortedTangerineArray = [...countData].sort((a, b) => {
    // 개수 같은 경우 사이즈 큰순으로 배치
    if (a[1] === b[1]) return b[0] - a[0];
    else return b[1] - a[1];
  });

  const sortedMap = new Map(sortedTangerineArray);

  for (let [size, count] of sortedMap) {
    // 개수가 k 개를 넘은 상태라면 break
    if (sum >= k) break;
    else {
      // 개수를 총 귤 개수에 더하고
      sum += count;
      // 귤 종류 1개 추가되었으므로 answer++
      answer++;
    }
  }

  return answer;
}

console.log(mySol(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(mySol(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(mySol(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
