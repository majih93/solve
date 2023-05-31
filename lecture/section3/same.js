// 회문 문자열

// 문자열 조작에 대한 이해

// 대소문자 구분할 필요 없음.

// 반 잘라서, 확인해보는 형태로 구현.

// 짝수인 경우, 반 자르는게 가능

// 홀수인 경우, 가운데 글자 기준으로 확인

function reverseString(str) {
  let splitString = str.split("");

  let reversStringArray = splitString.reverse();

  let result = reversStringArray.join("");

  return result;
}

function solution(str) {
  let answer;

  // 글자 수가 홀수
  if (str.length % 2 === 1) {
    let front = str.substring(0, parseInt(str.length / 2)).toUpperCase();

    let back = str.substring(parseInt(str.length / 2) + 1, str.length);

    let backString = reverseString(back).toUpperCase();

    if (front === backString) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  } else {
    let front = str.substring(0, str.length / 2).toUpperCase();

    let back = str.substring(str.length / 2, str.length);

    let backString = reverseString(back).toUpperCase();

    if (front === backString) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }

  return answer;
}

console.log(solution("strin")); // NO
console.log(solution("gooG")); // YES
console.log(solution("yEEs")); // NO
console.log(solution("lfdaslfla")); // NO
console.log(solution("thskkksht")); // YES

// 선생님 풀이

// 굳이 reverse 처리할 필요 없이, string을 받아서 toLowerCase로 애초에 대소를고려할 필요 없게 만들고,
// for 문 안에서 index 를 통해서 대칭으로 움직이는 형태로 구현

function solution2(str) {
  let answer = "YES";

  str = str.toLowerCase();

  // 중간까지 확인하면 됨.
  // 짝수인 경우 그냥 중간 전까지 확인하면 되고,
  // 홀수인 경우, 반으로 나눠서 하나 더한 값 전까지 확인하면 됨
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) {
      answer = "NO";
    }
  }

  return answer;
}

console.log(solution2("gooG")); // YES
console.log(solution2("gooGa")); // NO

// OR

// 반만 뒤집을 필요 없이, 소문자로 변환 후 전체를 뒤집어서 비교하는 방법도 있다.
// if(str.split("").reverse().join("") != s) 인 경우를 확인하는 방법
