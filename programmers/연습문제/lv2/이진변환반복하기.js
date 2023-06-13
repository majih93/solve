function solution(s) {
  function makeBinary(number) {
    if (number === 1) return "1";

    let result = "";

    while (number !== 1) {
      result = (number % 2) + result;
      number = Math.floor(number / 2);
    }

    result = 1 + result;

    return result;
  }

  let cCount = 0;
  let zCount = 0;

  while (s > 1) {
    console.log("executed", s);
    cCount++;
    let newS = "";

    for (let x of s) {
      if (x === "1") newS += x;
      else zCount++;
    }

    console.log(newS);

    s = makeBinary(newS.length);

    console.log(`변환된 값: ${s}`);
  }

  var answer = [];

  answer.push(cCount);
  answer.push(zCount);

  return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));

function makeBinary2(number) {
  if (number === 1) return "1";

  let result = "";

  while (number !== 1) {
    result = (number % 2) + result;
    number = Math.floor(number / 2);
  }

  return result;
}

console.log(makeBinary2(6));
