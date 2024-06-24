// 605. Can Place Flowers
// 풀이전략
var canPlaceFlowers = function (flowerbed, n) {
  // 풀이 전략
  // 0번째 index부터 iterate하면서
  // 조건을 체크해서 가능한 범위 내에 있는지 확인해서 가능하면 심고, 아니면 pass

  let answer = false;

  // 심어야하는 꽃 개수
  let leftFlowers = n;
  let idx = 0;

  while (idx < flowerbed.length && leftFlowers > 0) {
    if (flowerbed[idx] === 0) {
      const isBeforeEmpty =
        flowerbed[idx - 1] === undefined || flowerbed[idx - 1] === 0;
      const isAfterEmpty =
        flowerbed[idx + 1] === undefined || flowerbed[idx + 1] === 0;

      if (isBeforeEmpty && isAfterEmpty) {
        flowerbed[idx] = 1;
        leftFlowers--;
      }
    }
    idx++;
  }

  if (leftFlowers === 0) {
    answer = true;
  }

  return answer;
};

// 오 그래도 꽤 수월하게 풀어냈다는 점이 마음에 든다.
// 최선의 해결책인지는 모르겠다.
// 다만 수월하게 풀어냈다는점..

// 두 가지 사항을 놓쳤다.

// idx를 매번 증가처리해서 반복문을 처리해야된다는 점
// 조건이 충족되어서 씨앗을 심는 경우 배열에 값을 1로 변경해야지 다음 반복 분기가 제대로 동작한다는 점
