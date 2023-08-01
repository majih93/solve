// 조합의 경우 수
// 메모이제이션이 무슨 역할을 수행하는지가 중요

function solution(n, r) {
  // 공식을 사용하지 않고, nCr 을 계산해봐라.
  let answer;

  function DFS(n, r) {
    // 종료 지점을 어떻게 판단하는가?
    // 0개를 뽑는 경우면 가장 아래 노드에 도착했다는 의미가 되고,
    // n 개 중에서 r 개를 뽑을 때 n = r 인 경우 한 가지 경우의 수 밖에 없다.
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);

  return answer;
}

// console.log(solution(33, 19)); // 818809200

// 그런데 위 경우처럼 33, 19 같이 경우의 수가 많아지는 경우 트리가 엄청 커지기 때문에 시간이 오래걸림
// 이 문제를 해결할 수 있는 방법은?
// 데이터 특성에 따라 저장할 수 있는 자료구조를 생성하고, 반복적으로 계산되지 않도록 기존에 계산된 경우 저장된 값을 활용하도록 하면 된다.
// ex) 3C1 에서도 뻗으면 2C1 이 계산되는데, 이거를 3C2 에서도 왼쪽 자식 노드에서 똑같이 2C1 을 계산하게 된다. -> 즉 비효율이 발생하게 됨. 이미 앞선 시행에서 처리된 값이 있는 경우 해당 값을 참조해서 처리하면 된다.
// 2차원 배열을 활용하는 방법을 제시해주셨고, 나는 이걸 보면서 string으로 처리해서 더하면 조합은 unique 한 string이 되므로 string을 map 의 key 로 해서 값을 저장하면 어떨까 생각이 들었음

// 궁금하다 어떤 경우가 더 시간이 적게 소모되는지 string으로 변환하고 처리하는 로직이 더 적게 걸릴지..

function solution_usingMap(n, r) {
  let answer;

  let memoMap = new Map();

  function DFS(n, r) {
    if (n === r || r === 0) {
      return 1;
    } else {
      const key = n.toString() + r.toString();

      if (memoMap.has(key)) return memoMap.get(key);
      else memoMap.set(key, DFS(n - 1, r - 1) + DFS(n - 1, r));

      return memoMap.get(key);
    }
  }

  answer = DFS(n, r);

  return answer;
}

function solution_using2DArray(n, r) {
  let answer;
  // 저장할 2차원 배열 생성
  // 행의 개수 = 표본 개수
  // 열의 개수 = 뽑은 개수
  const memoArray = [];

  for (let i = 0; i < n; i++) {
    const rowArray = Array(r).fill(-1);

    memoArray.push(rowArray);
  }

  function DFS(n, r) {
    if (n === r || r === 0) {
      return 1;
    } else {
      if (memoArray[n - 1][r - 1] !== -1) return memoArray[n - 1][r - 1];
      else memoArray[n - 1][r - 1] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return memoArray[n - 1][r - 1];
    }
  }

  answer = DFS(n, r);

  return answer;
}

// console.log(solution_usingMap(33, 19)); // 0.5초 정도보다 더 적게 처리되는 거같음
// console.log(solution(33, 19)); // 5초 이상 소요
// console.log(solution_using2DArray(33, 19)); // 진짜 바로 나옴 어떤 게 더 우위에 있을지 모르겠음

// Map 을 이용하는 것과, 2차원 배열을 이용하는 것은 어떤 차이가 있을까?

// Map 은 key 선택에 있어서 더 flexible 한 반면에, array 는 값에 접근하기 위해서는 integer 인덱스 값을 활용해야만 한다는 제약이 존재할 수 있따.

// 2차원 배열은 우선 배열을 필요한 만큼 생성해두고 사용하는 만큼 메모리를 더 활용할 가능성이 있고, Map 을 활용하면 사용되는 값만 저장해서 사용할 수 있는 장점이 있다.

// 정해진 길이/범위의 데이터에 대해서는 배열을 활용하는 것이 더 성능적으로 좋을 수 있음. 메모리에 인덱스 값을 통해서 바로 접근해서 값을 조회하기 때문에
