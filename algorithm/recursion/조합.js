// 재귀 관련 공부 2023년 8월 2일

// 조합 관련 공부

// 조합 - 순서 상관 없이 경우의 수를 구하는 것.

// 조합은 재귀함수 or 반복문으로 구현해볼 수 있다.

// 조합 구현을 위해서 필요한 로직

// 1 부터 n까지의 수 중에서 m 개를 뽑을려면 어떻게 로직을 짜야 하는가?

function getCombinations(n, m) {
  let combinations = [];

  // 선택된 요소 기록할 배열
  const temp = Array(m).fill(0);

  /**
   *
   * @param {*} level 선택된 숫자의 수
   * @param {*} prevPickedNumber 직전 재귀에서 선택한 숫자
   */
  function dfs(level, prevPickedNumber) {
    // selectNum 개가 선택된 경우 종료
    if (level === m) {
      console.log("종료조건");
      combinations.push([...temp]);
    } else {
      for (let i = prevPickedNumber; i <= n; i++) {
        temp[level] = i;
        dfs(level + 1, i + 1);
      }
    }
  }

  dfs(0, 1); // 0개 선택, 최초 선택 숫자 1부터 시작

  return combinations;
}

const result = getCombinations(4, 2);

console.log(result);

// temp.slice() 를 하지 않고 그냥 temp 를 push 하게 되면 444444 로 처리된다 왜?
// -> 그렇지 않으면 같은 배열을 참조하는 형태로 처리되어서 가장 마지막에 처리된 배열로 일괄 참조됨
// 얕은 복사 처리가 되어야 한다.
