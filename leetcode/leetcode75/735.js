// 735. Asteroid Collision

function getNumberSign(numb) {
  return numb > 0 ? "positive" : "negative";
}

var asteroidCollision = function (as) {
  const answerStack = [];

  // 필요한 처리
  // 마지막 행성이 양수이고 입력되는 아이가 음수인 경우에 대해서만 처리가 필요하다.
  for (const a of as) {
    if (a < 0 && answerStack.at(-1) > 0) {
      // while문을 돌면서 필요한 처리
      // 1. 마지막 요소 + 음수행성이 음수인 경우
      // - pop()
      // - stack 상태 확인 후 마지막 요소가 음수이거나 빈 stack인 경우 push
      // 2. 0인 경우 -> pop()하고 break;
      // 3. 양수인 경우 -> 아무 처리도 필요없음. break.
      while (answerStack.length && answerStack.at(-1) > 0) {
        const sum = a + answerStack.at(-1);

        if (sum === 0) {
          answerStack.pop();
          break;
        } else if (sum < 0) {
          answerStack.pop();
          if (!answerStack.length || answerStack.at(-1) < 0) {
            answerStack.push(a);
          }
        } else {
          break;
        }
      }
    } else {
      answerStack.push(a);
    }
  }
  return answerStack;
};

// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -2, 1, -2]));

// 시행착오 원인 분석

// 결국 수도코드 단에서 명확하게 조건을 나눠서 처리하지 않은게 이슈인 듯 하다.
// 머릿속으로 모호하게 대충 이렇게 하면 풀릴 문제겠지 라고 생각해서 문제를 풀다보니 엣지케이스를 자주 놓치곤한다.
// case를 잘 분리해서 배타적으로 성립되는 케이스를 알아보고 해당되는 케이스들에 대해서 처리를 하자.
