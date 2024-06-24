// 58. Length of Last Word

// 내 풀이
var lengthOfLastWord = function (s) {
  const trimmedS = s.trim();
  const sArr = trimmedS.split(" ");

  return sArr[sArr.length - 1].length;
};

// 다른 사람의 풀이를 보면서, 굳이 split()할 필요 없이 trim한 string을 iterate하면 된다는 것을 알게 되었음.
// 실행 시간을 비교해보자.

// 실행 시간 자체는 차이가 별로 안난다.
// 이상하네 split()하는 거 대비 그냥 뒤에서부터 조건부로 for loop을 통해서 붙이는게 더 빠를 것 같았는데.
// 이유 - split()하는 것은 String이 길어질수록 비싼 operation 이라고 생각함.

// 시간이 빠른 코드를 내 환경에서 돌려보니 실행 시간이 환경에 종속적인 것도 있는 것 같다.

// at() 메서드.
// split(" ") 에 메서드 체이닝을 해서 해결할 수 없을까 했는데 at함수로 가능하다.
var lengthOfLastWord_one_liner = function (s) {
  return s.trimEnd().split(" ").at(-1).length;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.at(-1)); // 5
