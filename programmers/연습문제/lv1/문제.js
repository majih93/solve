function solution(arr, divisor) {
  var answer = [];

  for (let x of arr) {
    if (x % divisor === 0) answer.push(x);
  }

  if (answer.length === 0) {
    return -1;
  }

  answer.sort((a, b) => a - b);

  return answer;
}

function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length == 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// console.log(solution([5, 9, 7, 10], 5));
// console.log(solution([2, 36, 1, 3], 1));
// console.log(solution([3, 2, 6], 10));
// console.log(solution([1, 1, 1, 1, 1], 10));

function sol(input) {
  let dataMap = new Map();

  for (let i = 0; i < input[0][0]; i++) {
    dataMap.set(i + 1, i + 1);
  }

  console.log(dataMap);

  for (let i = 1; i < input.length; i++) {
    let x = dataMap.get(input[i][0]);
    let y = dataMap.get(input[i][1]);

    dataMap.set(input[i][0], y);
    dataMap.set(input[i][1], x);
  }

  console.log(
    Array.from(dataMap)
      .map(([key, value]) => value)
      .join(" ")
  );
}

sol([
  [5, 4],
  [1, 2],
  [3, 4],
  [1, 4],
  [2, 2],
]);
