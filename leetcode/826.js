// 826. Most Profit Assigning Work

// 첫 번째 생각한 솔루션

// 각 worker배열의 값에 대해서,
// diff배열을 탐색하면서 worker배열 값보다 작거나 같은 최대값을 찾는다.
// 찾으면 인덱스를 받아서 해당 인덱스의ㅏ profit배열 값을 누적시킨다.
// 시간 복잡도
// worker 배열의 길이가 m, diff배열의 길이가 n이라고 할 때, worker의 각 값에 대해서 diff배열 전체를 탐색하므로 O(m*n)

// 두 번째 솔루션으로 이어가기 전에 일단 문제를 풀어보자.
function maxProfitAssignment1(diff, profit, worker) {
  let answer = 0;

  for (let i = 0; i < worker.length; i++) {
    let maxProfit = 0; // 최대 이익값, 0으로 초기화 하는 이유는 마지막에 일괄적으로 더하는 형태로 처리했을 때 값이 없으면 0으로 처리하려고
    const workerCapacity = worker[i];

    // 난이도 배열 탐색하면서 최적값 찾기
    for (let j = 0; j < diff.length; j++) {
      // 케파 안에 있으면서 그 이익이 maxProfit보다 큰 값인 경우 max를 업데이트
      if (workerCapacity >= diff[j] && maxProfit < profit[j]) {
        maxProfit = profit[j];
      }
    }

    // 구한 최대 이익을 더해준다.
    answer += maxProfit;
  }

  return answer;
}

// 맞았음.

// 두 번째 솔루션.
// 처음에 iterate 한 번 해서 값을 담을 저장소에 저장한다. => Set으로 하면 될 것 같음.(linear lookup이 가능 + 중복값 자동으로 처리)
// 아니네, set으로 하면 안된다 왜냐하면 단순히 난이도뿐만 아니라 난이도별 이익도 같이 저장되어야 함.
// 그리고 중복값이어도 중복값으로 처리할 수 없음 왜냐하면 서로 다른 두 작업(=서로 인덱스가 다른 두 작업)이 같은 난이도여도 더 높은 수익을 보장할 수 있음.
// 근데 그러면, 보다 간단하게 하려면, worker가 결국 같은 난이도라면 더 높은 수익을 얻는 일을 시켜야함.

// 그러면 map을 사용하자. key - 난이도, value - 난이도에 대해서 얻을 수 있는 최대 수익

// map에 같은 난이도가 없으면  난이도에 대해서 얻는 수익으로  난이도에 대해서 얻는 수익으로 값을 설정하고,
// 있으면 수익을 비교해서 최대수익으로 업데이트.

// map을 만들어둔 상태에서,
// worker에 대해서 먼저 난이도값이 map에 있는지 파악하고, 없으면 배열 다시 탐색하면서 최대값 찾는다.
// 있으면 최대 수익으로 자동 처리하면 됨

function maxProfitAssignment2(diff, profit, worker) {
  let answer = 0;

  // map을 만든다.
  const diffMaxProfitMap = new Map();

  // 최초 한 번 profit iterate하면서 map에 저장.
  for (let i = 0; i < diff.length; i++) {
    const prof = profit[i];
    const difficulty = diff[i];

    if (diffMaxProfitMap.has(difficulty)) {
      // 수익을 비교해서 더 큰값으로 설정한다.
      const prevProfit = diffMaxProfitMap.get(difficulty);
      if (prof > prevProfit) {
        diffMaxProfitMap.set(difficulty, prof);
      }
    } else {
      diffMaxProfitMap.set(difficulty, prof);
    }
  }

  // worker 배열에 대해서 작업

  for (let i = 0; i < worker.length; i++) {
    const capa = worker[i];
    let maxProfit = 0;
    for (let j = 0; j < diff.length; j++) {
      if (capa >= diff[j] && maxProfit < profit[j]) {
        maxProfit = profit[j];
      }
    }
    // map에 있는지 확인하고 있으면 처리, 아니면 iterate
    if (diffMaxProfitMap.has(capa)) {
      maxProfit = diffMaxProfitMap.get(capa);
    } else {
      console.log("case2");
    }

    answer += maxProfit;
  }

  return answer;
}

// 2번째 솔루션은 놓친 부분이 있었음.

// 첫 번째 솔루션에서는 worker 의 capa보다 작거나 같은 모든 diff가 제공해주는 이득을 고려함.
// 즉 capa가 30일 때, 만약에 diff가 1인 일이 이익이 99이고, diff가 30인 일이 이익이 1이라면 diff가 1인 일을 수행함

// 두 번째 솔루션에서는 capa 보다 작거나 같은 diff를 가지는 일들 중에서 이익이 제일 큰 일을 골라내야 한다는 점이 고려되지 않음.

// 음... 생각보다 간단하게 하기가 조금 어려울 수 있겠는디?

// 음 이거를 어떻게 개선해볼 수 있을까?

// 일단 처음 탐색할 때, diff의 min값을구해서 min보다 작은 capa를 가지는 worker에 대해서는 iterate하지 않는 로직을 추가하자.
// 두 번째 솔루션으로 이어가기 전에 일단 문제를 풀어보자.
function maxProfitAssignment3(diff, profit, worker) {
  let answer = 0;

  // 최소 난이도 - 이 값보다 능력이 부족한 worker는 할 일이 없음
  const minimumDifficulty = Math.min(...diff);

  for (let i = 0; i < worker.length; i++) {
    let maxProfit = 0; // 최대 이익값, 0으로 초기화 하는 이유는 마지막에 일괄적으로 더하는 형태로 처리했을 때 값이 없으면 0으로 처리하려고
    const workerCapacity = worker[i];

    // 난이도 배열 탐색이 필요없는 경우
    if (workerCapacity < minimumDifficulty) {
      continue;
    }

    // 난이도 배열 탐색하면서 최적값 찾기
    for (let j = 0; j < diff.length; j++) {
      // 케파 안에 있으면서 그 이익이 maxProfit보다 큰 값인 경우 max를 업데이트
      if (workerCapacity >= diff[j] && maxProfit < profit[j]) {
        maxProfit = profit[j];
      }
    }

    // 구한 최대 이익을 더해준다.
    answer += maxProfit;
  }

  return answer;
}

// 시간적으로 엄청 더 개선되지는 않았음.
// 거를 수 있는 범위가 많지 않다는 의미지.

// iterate한 후에, 결정된 특정 worker의 능력에 대한 maxProfit을 저장한다.(미리 처리하는게 아니라, iterate다 해서 해당 diff범위 내에서 최대 이익을 구한 상태에서 저장)
function maxProfitAssignment(diff, profit, worker) {
  let answer = 0;

  // 최소 난이도 - 이 값보다 능력이 부족한 worker는 할 일이 없음
  const diffMaxProfit = new Map();

  for (let i = 0; i < worker.length; i++) {
    let maxProfit = 0; // 최대 이익값, 0으로 초기화 하는 이유는 마지막에 일괄적으로 더하는 형태로 처리했을 때 값이 없으면 0으로 처리하려고
    const workerCapacity = worker[i];

    // 저장소 확인해서 존재하면 max값 사용
    if (diffMaxProfit.has(workerCapacity)) {
      maxProfit = diffMaxProfit.get(workerCapacity);
    } else {
      // 난이도 배열 탐색하면서 최적값 찾기
      for (let j = 0; j < diff.length; j++) {
        // 케파 안에 있으면서 그 이익이 maxProfit보다 큰 값인 경우 max를 업데이트
        if (workerCapacity >= diff[j] && maxProfit < profit[j]) {
          maxProfit = profit[j];
        }
      }

      // 능력에 대해서 최대 이익을 저장
      diffMaxProfit.set(workerCapacity, maxProfit);
    }

    // 구한 최대 이익을 더해준다.
    answer += maxProfit;
  }

  return answer;
}

console.log(
  maxProfitAssignment(
    [5, 50, 92, 21, 24, 70, 17, 63, 30, 53],
    [68, 100, 3, 99, 56, 43, 26, 93, 55, 25],
    [96, 3, 55, 30, 11, 58, 68, 36, 26, 1]
  )
);

// 별로 시간이 그렇게 개선되지가 않았음..
// 흠 뭐지...

// 전체적으로 시간을 확 줄이는 방법들이 있는 것 같은데..
