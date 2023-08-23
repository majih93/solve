// 13. Roman to integer

function solution(s) {
  let answer = 0;

  const transformer = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  // for loop to iterate over string
  for (let i = 0; i < s.length; i++) {
    const testString = s[i] + s[i + 1];

    if (transformer.hasOwnProperty(testString)) {
      answer += transformer[testString];
      i++;
    } else {
      answer += transformer[s[i]];
    }

    // // I / X / C can be cases for subtraction
    // if (s[i] === "I" && s[i] === "X" && s[i] === "C") {
    //   if (s[i] === "I") {
    //     if (s[i + 1] === "V") {
    //       answer += transformer.IV;
    //       i++;
    //     }
    //     if (s[i + 1] === "X") {
    //       answer += transformer.IX;
    //       i++;
    //     }
    //   }

    //   if (s[i] === "X") {
    //     if (s[i + 1] === "L") {
    //       answer += transformer.XL;
    //       i++;
    //     }
    //     if (s[i + 1] === "C") {
    //       answer += transformer.XC;
    //       i++;
    //     }
    //   }

    //   if (s[i] === "C") {
    //     if (s[i + 1] === "D") {
    //       answer += transformer.CD;
    //       i++;
    //     }

    //     if (s[i + 1] === "M") {
    //       answer += transformer.CM;
    //       i++;
    //     }
    //   }
    //   console.log("subtract!");
    //   console.log(answer);
    // } else {
    //   answer += transformer[s[i]];
    //   console.log("nonsubtract");
    //   console.log(answer);
    // }
  }

  return answer;
}

console.log(solution("MCMXCIV")); // 1994

// 조건 체크를 전부 하는 방식으로 풀이를 하다가, 더 간단한 코드가 떠올라서 수정함
// 객체에 없는 property 에 접근 시 undefined 반환된다는 점을 이용 + array 의 invalid index 에 접근 시 undefined 반환된다는 점 이용
