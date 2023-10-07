// 860. Lemonade Change

var lemonadeChange = function (bills) {
  // 일단 처음에 5달러가 아니면 바로 불가한 케이스 되어버림
  // 두 번째가 20달러인 케이스도 절대 안됨
  if (bills[0] !== 5) return false;
  if (bills[1] === 20) return false;

  const billsCount = {
    5: 0,
    10: 0,
  };

  const addBill = (billKey) => {
    billsCount[billKey] = billsCount[billKey] + 1;
  };

  const subtractBill = (billKey) => {
    billsCount[billKey] = billsCount[billKey] - 1;
  };

  const getBillCount = (billKey) => {
    return billsCount[billKey];
  };

  const canReturnForTwenty = () => {
    const tenAndFiveAvailable = billsCount[5] > 0 && billsCount[10] > 0;
    const onlyFiveAvailable = billsCount[5] >= 3;

    if (tenAndFiveAvailable) return 10;
    if (onlyFiveAvailable) return 5;
    return false;
  };

  const returnTenAndFive = () => {
    console.log("함수 실행됨");
    billsCount[10] = billsCount[10] - 1;
    billsCount[5] = billsCount[5] - 1;

    console.log(billsCount[5]);
  };

  const returnFives = () => {
    billsCount[5] = billsCount[5] - 3;
  };

  // for 문 안에서 return 해도 함수가 종료된다.
  // 종료 케이스에 대해서 처리만 하면 된다.
  for (let bill of bills) {
    // 받은 지폐 별로 case 처리
    if (bill === 5) addBill(5);
    if (bill === 10) {
      if (getBillCount(5) === 0) return false;
      addBill(10);
      subtractBill(5);
    }
    if (bill === 20) {
      if (!canReturnForTwenty()) return false;
      if (canReturnForTwenty() === 10) {
        returnTenAndFive();
      } else {
        returnFives();
      }
    }
  }

  return true;
};

// const answer = lemonadeChange([5, 5, 10, 10, 20]);
const answer2 = lemonadeChange([5, 5, 5, 5, 10, 5, 20, 10, 5, 5]);

// 위 답으로 하면 시간 / 공간 둘 다 효율적이지는 않다. 개선점을 찾아보자.

const improvedAnswer1 = (bills) => {
  // 안되는 조건 조건 자체는 동일함
  if (bills[0] !== 5) return false;
  if (bills[1] === 20) return false;

  let fiveBillCount = 0;
  let tenBillCount = 0;

  // 따로 함수 선언하지 않고 로직 처리

  for (let bill of bills) {
    // 5인 경우
    if (bill === 5) fiveBillCount++;
    if (bill === 10) {
      if (fiveBillCount === 0) return false;
      fiveBillCount--;
      tenBillCount++;
    }
    if (bill === 20) {
      // 5달러 및 10 달러가 하나씩 이상 있는 경우
      if (fiveBillCount >= 1 && tenBillCount >= 1) {
        fiveBillCount--;
        tenBillCount--;
        continue;
      }

      // 5달러 3개 있는 경우
      if (fiveBillCount >= 3) {
        fiveBillCount -= 3;
        continue;
      }

      return false;
    }
  }

  return true;
};

// 공간 효율이 왜 낮을까.. 뭐가 문제지
