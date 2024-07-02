// To be or not to be

// 뭐에 대한 문제일까?
/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
  return {
    toBe(valueToCompare) {
      if (val === valueToCompare) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe(valueToCompare) {
      if (val !== valueToCompare) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"

// 특정 인자를 받아서, 해당 인자에 대한 reference 를 유지하는 여러 함수를 수행할 수 있는 어떤 구조를 생성한다는 점이 포인트인듯?

// . 연산자로 chaining 해서 사용하는 것 자체가 어떤 의미인지 한 번 생각해보는 계기이기도 한듯?

const multipliers = function (value) {
  return {
    1: value * 1,
    2: value * 2,
    3: value * 3,
  };
};

console.log(multipliers(5)[1]); // 5
console.log(multipliers(5)[2]); // 10
console.log(multipliers(5)[3]); // 15
