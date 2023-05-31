// 숫자만 추출

// 문자/숫자가 섞여있는 문자열에서, 숫자만 추출해서 자연수 만들기.

// A-Z, a-z이면, ""으로 대체하고, 해당 string을 Int 로 변환

function solution(str) {
  // 숫자가 섞여 있어도, lowerCase가 처리됨
  str = str.toLowerCase();

  str = str.replace(/[a-z]/g, "");

  console.log(str);

  return Number(str);
}

console.log(solution("g0en2T0s8eSoft")); // 208

// 선생님 풀이

// for 문을 돌면서, inNaN 함수를 활용해서 answer에 더하는 형태로 구현 (1의 자리, 10의 자리, 등등을 처리해서)
