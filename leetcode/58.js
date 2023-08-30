// 58. Length of last word.

// 뒤에서부터 " " 가 나올때까지 iterate 하는 식으로 풀면 되지 않을까 하는 생각이 들었음

// 문제를 제대로 읽지 않고 풀었음. -> 아주 나쁜 버릇이다. 문제 및 주어진 test case 는 꼼꼼하게 체크한 후에 문제를 풀도록 하자.

// whitespace 를 처리할 방법에 대해서 검색해본 결과 trim() 이라는 함수 알게 됨
// 양쪽 끝에 whitespace 를 제거해준다.

// 다른 사람 풀이를 보니, lastIndexOf 라는 함수도 있네?!
// searches this string and returns the index of the last occurrence of the specified substring.

function solution(s) {
  let answer = 0;
  // iterate string from behind
  const trimmedString = s.trim();

  let curIndex = trimmedString.length - 1;

  while (true) {
    if (trimmedString[curIndex] !== " " && curIndex > -1) {
      answer++;
      curIndex--;
    } else {
      break;
    }
  }

  return answer;
}

console.log(solution("hello world   "));
