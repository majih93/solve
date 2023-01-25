// 팰린들모

// 앞에서 읽을 때와, 뒤에서 읽을 때가 동일한 경우 확인

// 대소문자 구분 x, 알파벳 이외의 문자는 무시

// 방법을 도저히 알 수 없어서, 강의를 바로 들었음

// 포인트는, 알파벳이 아닌 문자를 제거하는 것

// 정규표현식을 통해서 제거함

function solution(str) {
  let answer = "YES";

  // a-z가 아닌(^)값을 전역에서 "" 로 대체하는 로직
  str = str.toLowerCase().replace(/[^a-z]/g, "");

  console.log(str); // foundtimestudyydutsemitdnuof -> 불필요한 문자 및 공백이 제거되었음

  if (str.split("").reverse().join("") != str) {
    return "NO";
  }
  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); // YES
