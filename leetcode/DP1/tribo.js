// tribonacci number

// 로직은 비슷하고, 숫자가 더 많아졌다는 것 뿐인듯

// 동적계획법으로 풀어보자.

const tribonacci = function (n) {
  // 데이터를 담을 배열 ( f(3) 까지는 저장 )
  const data = [0, 1, 1];

  const calculate = (n) => {
    if (data[n] !== undefined) {
      return data[n];
    }
    data[n] = calculate(n - 1) + calculate(n - 2) + calculate(n - 3);
    return data[n];
  };

  return calculate(n);
};

console.log(tribonacci(3));
console.log(tribonacci(4));
