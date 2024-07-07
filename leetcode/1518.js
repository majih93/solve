// 1518. Water Bottles

var numWaterBottles = function (numBottles, numExchange) {
  // 구해야되는 값 - 몇 병의 물을 마셨는지?
  // numExchange 개의 빈병을 하나의 물로 변경할 수 있음

  // 문제를 풀려면...
  // 문제 푸는 프로세스
  // 문제 해결

  // 문제가 뭐임?

  // 최대로 마실 수 있는 물의 개수가 몇 개냐?

  // 재귀적으로 풀어낼 수 있을 것 같은데.

  // 마신 물의 개수를 저장할 변수 하나 만들고,
  // 마시는 물을 입력 받아서,
  // 마시는 물의 개수를 입력받아서
  // case1. 마신 물의 개수가 numExchange이상이다. -> 재귀적으로 다음 함수 호출(입력값은 마신 물의 수를 numExchage로 나눈 나머지. -> 나머지라고 잘못 생각했는데, 몫이어야 한다.
  // case2. 마신 물의 개수가 numExchange보다 적음 -> 재귀 종료

  // 엣지 케이스에 대한 고려
  // 한 번만 호출되더라도 처리되어야 하고,
  // numBottles는 0으로 입력되는 경우가 없다.
  // numExchange도 0으로 입력되는 경우가 없다.(2이상 값임. 1이면 무한히 반복될 수 있으므로.)

  // 여기까지 고려해서 코드 작성했는데 틀렸음.

  // 고려하지 못한 케이스
  // 앞서의 function execution에서 교환하지 못하고 남은 빈병(나눈 나머지)을 다음에 추가해서 교환할 수 있다는 점을 고려하지 못했다.

  // 마신 물의 수 저장하는 변수
  let drinked = 0;

  // 재귀적으로 마신 물 수 더하는 함수
  function getDrinkedBottle(filledBottles, leftOver) {
    // 1. drinked에 마신 물의 수를 추가한다.
    drinked += filledBottles;

    const emptyBottles = filledBottles + leftOver;
    // 2. 케이스 2가지에 따라 함수를 재귀적으로 호출하거나 종료한다.
    if (emptyBottles >= numExchange) {
      const exchangedBottles = Math.trunc(emptyBottles / numExchange);
      const newLeftOver = emptyBottles % numExchange;
      // 마신물의 개수가 새로운 물로 교환 가능한 개수보다 많은 경우
      getDrinkedBottle(exchangedBottles, newLeftOver);
    } else {
      return;
    }
  }

  getDrinkedBottle(numBottles, 0);

  return drinked;
};
