// 푸드파이터 대회
// repeat 를 통해서 특정 문자 추가

function mySol(food) {
  let answer = "";

  let string = "";

  for (let i = 1; i < food.length; i++) {
    string += `${i}`.repeat(parseInt(food[i] / 2));
  }

  answer += string;
  answer += "0";
  answer += [...string].reverse().join("");

  return answer;
}

console.log(mySol([1, 3, 4, 6]));
