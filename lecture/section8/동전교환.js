// 동전교환

// 풀이 전략

// 모든 경우의 수를 탐색하는게 조금 의심스러운 경우
// -> 의심스러운 이유: 경우의 수가 정말 많을 수가 있음. 동전의 수가 정해져있지 않음

// 최소 횟수인 것은 어떻게 아는지?
// 모든 경우의 수 처리하고, 그 중 최소값을 찾아야 하는지?

// 가능한 한 가장 큰 값으로 채우고, 그 다음 값으로 채우고, 그 다음 값 채우고, -> 이렇게 안되면 2번째 큰 값으로 처리하고 이렇게 해야하나?

// 일단 중복순열하고 비슷한 측면이 있다. -> 동전 하나를 여러 번 사용할 수 있다는 점에서.

// 트리의 각 단계는 동전의 개수가 된다. 그리고 각 단계별로 동전을 매번 3개 중 하나를 선택하는 형태로 뻗어 나가면 됨.
// 여기까지 힌트를 가지고 한 번 풀어보자.

function solution(coinArr, goalMoney) {
  // answer에 최소 횟수 담고, 비교하면서 업데이트해서 접근
  let answer = Number.MAX_SAFE_INTEGER;

  // 각 동전을 몇 번 썼는지 횟수 담을 배열
  const coinCountArr = Array(coinArr.length).fill(0);

  let counter = 0;

  function DFS(L, sum) {
    if (counter > 30) return;
    counter++;
    // sum이 목표 금액과 동일한 경우, 배열의 동전 갯수 합을 answer 와 비교해서 더 작은 경우 교체한다.
    if (sum >= goalMoney) {
      // 종료되는 조건이 정해진 마지막 노드가 아니므로, sum 값을 기준으로 재귀함수 종료 조건을 설정
      if (sum === goalMoney) {
        console.log(sum);

        console.log(`총 합이 ${goalMoney}인 배열`);
        console.log(coinCountArr);

        const coinCountSum = coinCountArr.reduce((a, b) => a + b, 0);

        if (coinCountSum === 15) {
          console.log(coinCountArr);
        }

        if (coinCountSum < answer) answer = coinCountSum;
      }

      return;
    } else {
      // 아직 조건이 충족되지 않은 경우
      // 각 동전 별로 한 번씩 DFS 가 실행되어야 한다 그리고 해당 동전의 count++, 동전의 값만큼 sum에 ++ 후 다음 재귀함수 실행되면 됨
      for (let i = 0; i < coinArr.length; i++) {
        console.log(`처리되기 전 coinCountArr ${coinCountArr}`);
        const coinValue = coinArr[i];
        coinCountArr[i] = coinCountArr[i] + 1;

        console.log(`DFS ${L}실행됨, sum 값 ${sum}`);

        DFS(L + 1, sum + coinValue);
      }
    }
  }

  DFS(0, 0);

  console.log(answer);

  return answer;
}

// solution([1, 2, 5], 15);

// const array = [1, 2, 3];

// array[1]++;

// console.log(array);

// 총 합이 제대로 계산되지 않는 이슈가 생김..

// cointCountArr 가 어차피 필요 없음
// 단계가 동전의 갯수라고 했잖아!! L이 답이 되는것이지.

function solution_2(coinArr, goalMoney) {
  // answer에 최소 횟수 담고, 비교하면서 업데이트해서 접근
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    // 조기 종료 조건
    // 목표 금액 초과한 경우 더이상 처리할 필요가 없음
    if (sum > goalMoney) return;
    // sum이 목표 금액과 동일한 경우, 배열의 동전 갯수 합을 answer 와 비교해서 더 작은 경우 교체한다.
    if (sum === goalMoney) {
      answer = Math.min(answer, L);

      return;
    } else {
      // 아직 조건이 충족되지 않은 경우
      // 각 동전 별로 한 번씩 DFS 가 실행되어야 한다 그리고 해당 동전의 count++, 동전의 값만큼 sum에 ++ 후 다음 재귀함수 실행되면 됨
      for (let i = 0; i < coinArr.length; i++) {
        const coinValue = coinArr[i];

        DFS(L + 1, sum + coinValue);
      }
    }
  }

  DFS(0, 0);

  console.log(answer);

  return answer;
}

solution_2([1, 2, 5], 15);

// 우선, count를 굳이 배열로 처리할 필요가 없었다는 점 그리고 countArr 값을 초기화 해주지 못한 점이 이슈였음
