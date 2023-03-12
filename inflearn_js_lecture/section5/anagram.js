// 내 풀이
function solution(s1, s2) {
  let answer = "YES";

  let s1Hash = new Map();
  let s2Hash = new Map();

  for (let x of s1) {
    if (s1Hash.has(x)) s1Hash.set(x, s1Hash.get(x) + 1);
    else s1Hash.set(x, 1);
  }

  for (let x of s2) {
    if (s2Hash.has(x)) s2Hash.set(x, s2Hash.get(x) + 1);
    else s2Hash.set(x, 1);
  }

  // 길이가 다르면 애초에 애너그램일 수가 없다.
  if (s1Hash.size === s2Hash.size) {
    for (let [key, val] of s1Hash) {
      if (s2Hash.get(key) != val) {
        answer = "NO";
      }
    }
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA")); // YES
console.log(solution("abaCC", "Caaab")); // NO

// 선생님 풀이
// 내 로직: 두 문자열에 대해서 hash map을 생성하고, 두 맵의 size 및 key value 의 일치여부를 비교하는 형태로 구현
// 선생님 로직: 한 문자열에 대해서 hash map 을 생성하고, 다른 문자열을 해당 hash map 을 기준으로 문자 하나하나 분석하는 형태로 구현

// 선생님 로직을 구현해보자.
function teacherSolution(s1, s2) {
  let answer = "YES";

  let s1Hash = new Map();

  for (let x of s1) {
    if (s1Hash.has(x)) s1Hash.set(x, s1Hash.get(x) + 1);
    else s1Hash.set(x, 1);
  }

  for (let x of s2) {
    if (s1Hash.has(x) === false || s1Hash.get(x) === 0) {
      answer = "NO";
    } else {
      s1Hash.set(x, s1Hash.get(x) - 1);
    }
  }

  return answer;
}

console.log(teacherSolution("AbaAeCe", "baeeACA")); // YES
console.log(teacherSolution("abaCC", "Caaab")); // NO
