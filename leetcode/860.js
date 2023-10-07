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
