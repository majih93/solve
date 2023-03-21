// 기사단원의 무기

// 약수는 제곱근까지만 구하면 된다는 점을 이용
// 겹치는 약수는 set 를 통해서 화근 제거
const getDivisors = (num) => {
  const divisors = new Set();
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.add(i);
      if (num / i != i) divisors.add(num / i);
    }
  }

  // divisors.sort((a, b) => a - b);
  return divisors;
};

function mySol(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let temp = getDivisors(i).size;
    if (temp > limit) {
      answer += power;
    } else {
      answer += temp;
    }
  }

  return answer;
}

console.log(mySol(5, 3, 2));
console.log(mySol(10, 3, 2));
