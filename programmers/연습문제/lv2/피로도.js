// 피로도
/**
 * 풀이 전략
 *
 * 현재 최소 필요 피로도를 충족하는 애들 중에서 제일 소모피로도가 낮은 애들돌면 되는거 아닌지? -> 아님
 *
 * 전체 경우의 수 다 탐색한다고 치면,
 */

function mySol(k, dungeons) {
  let answer = 0;

  const filteredArray = dungeons.filter((item) => item[0] <= k);

  // 모든 경우의 수
  const allPossibilities = getPermutations(filteredArray);

  console.log(allPossibilities);

  for (let x of allPossibilities) {
    // totalEnergy 는 복사해서 가지고 있기
    let totalEnergy = k;
    let tempSum = 0;
    for (let y of x) {
      if (y[0] <= totalEnergy) {
        totalEnergy -= y[1];
        tempSum++;
      }

      if (tempSum === 4) {
        console.log(x);
      }
      if (tempSum === x.length) return tempSum;
    }

    if (answer < tempSum) answer = tempSum;
  }

  return answer;
}

function getPermutations(array) {
  if (array.length === 1) {
    return [array];
  }

  const permutations = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const remainingElements = array.slice(0, i).concat(array.slice(i + 1));
    const remainingPermutations = getPermutations(remainingElements);

    for (let j = 0; j < remainingPermutations.length; j++) {
      permutations.push([currentElement].concat(remainingPermutations[j]));
    }
  }

  return permutations;
}

const array = [
  [80, 20],
  [50, 40],
  [30, 10],
];
const permutations = getPermutations(array);

console.log(permutations);

console.log(
  mySol(80, [
    [80, 20],
    [50, 40],
    [30, 10],
    [30, 10],
  ])
);

// 일단 모든 경우의 수를 탐색하는 경우로 풀기는 했는데, dfs 로 풀어야 하는게 더 맞는 경우인 듯
// 경우가 아니면 다른 노드로 넘거가는 느낌으로..
