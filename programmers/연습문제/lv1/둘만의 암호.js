// 둘만의 암호

// 그냥 a 부터 z까지 배열 만들어서 탐색

function solution(s, skip, index) {
  let result = "";

  const alphabetArray = [];

  for (let i = 97; i <= 122; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }

  // 제외 알파벳 제거
  const filteredAlphabets = alphabetArray.filter((el) => !skip.includes(el));

  for (let al of s) {
    const curIndex = filteredAlphabets.findIndex((el) => el === al);

    let nextIndex = curIndex + index;

    // 이렇게 하면 실패하는 케이스 존재
    // if (nextIndex > filteredAlphabets.length - 1) {
    //   nextIndex = nextIndex - filteredAlphabets.length;
    // }

    // 이렇게 하면 성공
    result += filteredAlphabets[nextIndex % filteredAlphabets.length];

    result += filteredAlphabets[nextIndex];
  }

  return result;
}

const result = solution("aukks", "wbqd", 5);

// 실패하는 케이스가 존재하는데...
