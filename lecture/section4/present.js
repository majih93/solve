/**
 * 졸업 선물
 *
 * 한정된 예산으로 최대한 많은 수의 학생들에게 선물을 사주는 것이 목표
 * 상품 하나는 50퍼 할인해서 구매할 수 있음 -> 배송비는 그대로라는 점
 * 상품 가격은 짝수로만 입력
 * 선생님은 최소한 1개 이상의 상품을 살 수 있는 예산이 주어져 있음
 */

/**
 * 풀이 계획
 *
 * - 음 일단, 어떤 상품을 깎는게 베스트인지 판단하는게 필요하다. 만약에 무조건 가장 비싼 상품을 깎는게 베스트라면, 깎은 가격에서 가장 작은 총액부터 넣어서 예산 초과하기 전까지 더하면 되는 문제
 *
 * - 어떻게 어떤 상품을 깎는게 최선인지 알 수 있을까?
 * - 그냥 어떤 케이스에서 뭘 깎는게 베스트인지 알수가 없는거같음
 * - 그러니까, 모든 값에 대해서 해당 값을 깎았을 때, 최대로 선물할 수 있는 학생 수를 구하고, 그 중 가장 큰 값을 반환하는 형태로 구현하는 수 밖에 없을 것으로 생각됨.
 *
 */
const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(numberOfStudents, budget, array) {
  // 최대 선물 가능한 학생 수를 담을 변수
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numberOfStudents; i++) {
    // 해당 학생이 원하는 선물을 할인한 가격을 기준으로 최대한 선물할 수 있는 학생 수 계산

    // 배열 복사
    const newArr = [...array];

    // 새로운 배열로 각 학생별로 선물 값 + 배송비로 이루어진 배열로 변환(할인된 가격 반영해서)
    for (let j = 0; j < numberOfStudents; j++) {
      // 할인 대상 학생인 경우 할인해서 더하기 처리
      if (j === i) {
        newArr[j] = newArr[j][0] / 2 + newArr[j][1];
      } else {
        newArr[j] = newArr[j][0] + newArr[j][1];
      }
    }

    // 결과 배열 오름차순 정렬
    newArr.sort((a, b) => a - b);
    // 정렬된 배열에 대해서, 합하면서 최대 학생 수 구하기
    let sum = 0;
    for (let k = 0; k < numberOfStudents; k++) {
      // 이번 값을 더했을 때 버짓보다 작거나같으면 추가하고,
      if (sum + newArr[k] <= budget) {
        sum += newArr[k];
      } else {
        // 버짓보다 큰 경우에는 k가 최대 학생수(k+1 - 1 개념에서, k+1은 해당 분기번째 학생, 그 전 학생까지 해줄 수 있으니까 -1)
        if (sum > answer) answer = k;
      }
    }
  }

  return answer;
}

console.log(solution(5, 28, arr)); // 4

// 선생님풀이

function solution2(m, product) {
  let answer = 0;

  n = product.length;

  // 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 총 비용 기준으로

  for (let i = 0; i < n; i++) {
    // i에 해당되는 인덱스 상품을 할인 받은 상태로
    let money = m - (product[i][0] / 2 + product[i][1]); // 할인 받은 건 산다는 소리니까, 일단 전체 예산에서 빼고,

    // 1명 분은 샀으니, counter 변수는 1로 초기화
    let cnt = 1;

    // 나머지에 대해서 처리
    for (let j = 0; j < n; j++) {
      // 반복 줄이기 위해서 break 조건 추가
      // 이번 분기 총 가격이 남은 돈보다 많으면 앞으로 더 안해도 됨
      if (j != 1 && product[j][0] + product[j][1] > money) break;
      if (j != i && product[j][0] + product[j][1] <= money) {
        // 사는 순간, money 에서 차감시키는 방식으로 처리했기 때문에 조건식이 이렇게 됨

        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(solution2(28, arr)); // 4
