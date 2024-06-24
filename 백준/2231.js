// 2231 분해합

// N과 N의 각 자리수의 합 = 분해 합

// N + N각자리수 = 분해합
// M의 분해합이 N인 경우, M은 N의 생성자.

// 주어진 자연수 N에 대해서 가장 작은 생성자를 구하는 프로그램을 작성해라.

// 음 보자보자.

// 주어진 자연수 N에 대해서 가장 작은 생성자라고 하면,

// 생성자가 없는 경우에는 0을 출력한다.

// 우선 주어진 숫자에 대해서 처리가 필요하다.

// x + x각자리수 = 주어진 숫자. 인데.

// 자리수 값을 구해야하고,
// 처리 시 충족시키는 x가 존재하는지 확인해야 한다.
// 음 방정식을 어떻게 구할 수 있을까?

// const result = 0;

// // 숫자에 대해서 각 자리수 합을 구하는 방법
// const number = 1234;

// console.log(
//   number
//     .toString()
//     .split("")
//     .reduce((a, b) => Number(a) + Number(b))
// );

// function calculateDigitSum(number) {
//   return number
//     .toString()
//     .split("")
//     .reduce((a, b) => Number(a) + Number(b));
// }

// 결국 방정식을 풀기 위해서 가능한 범위의 자연수 범위에 대해서 다 처리가되어야 한다는 의미구나.

// 어떻게 자연수 범위를 잡아서 전체 탐색을 실행해야하는 걸까?

// N에 대해서, N을 '생성'하는 자연수가 존재하는지 확인하려면,

// 생성하는 자연수의 제약 조건
// 자릿수는 최대 입력된 자연수와 동일,
// 가장 단위가 높은 숫자는 최대값이 입력된 자연수.

// for문을 이런식으로 돌면 너무 많아질 수 있음.

// 그게 아니라 숫자 범위 자체를 제한해야 된다.

// 뭔말인고 하니,

// 세 자리 수에 대해서 생성자를 구한다고 하면, 최대한으로 가질 수 있는 생성자 후보가 N - 9 * 3 이다. 왜? 각 자리가 최대값이 9이기 때문이다.
// 주어진 N의 자릿수를 구하고, 해당 숫자의 자릿수만큼 최대 가지는 숫자의 범위를 설정해서 탐색하면 된다
// 이때, 범위 구할 때 1보다 작은 수인 경우 1까지만 처리하자. (가장 모든 케이스를 포함할 수 있는 시나리오.)

// 한 번 더 생각하기.
// 놓친 부분이 없나?
// 엣지케이스로 생각해보자.

// 한자리 숫자의 경우, 분해합 최대값이 9이므로(9 * 1) 모든 숫자에 대해서 9를 빼면 0이 된다. 그러므로 모든 숫자에 대해서 1부터 해당 숫자 - 1 까지 탐색하면 된다.
// 숫자-1 까지 탐색하는 이유는 더하는 숫자가 자연수이므로 적어도 1보다는 크거나 같기 때문이다.

// 두 자리 숫자의 경우, 분해합 최대값이 18이므로(9 * 2) 입력값 - 18 부터 입력값 - 1 까지 범위를 탐색하면 된다. 1의 자리 숫자와 마찬가지로 입력값 - 18값이 1보다 작은 경우 1부터 탐색되도록 조건을 걸면 된다.
// 14 = 7+7 범위에 들어온다.
// 16 = 8+8 범위에 들어온다.

// 세자리 숫자도 같은 로직이다.

// ----답변 제출 후 실패

// 한 자리 숫자인 경우 calcNumberAndDigitSum 함수 내에서 digitSum값 type이 String으로 처리되어서 원하는 결과가 도출되지 않음
// 예를 들어, 7인 경우 14가 출력되어야 하는데 77이 출력된다.
// reduce 는 요소가 하나인 배열에 대해서는 비교값이 없기 ㅣ때문에 callback이 실행되지 않고 하나 요소 자체를 return 하는 형태로 동작하기 때문에

// ------ 또 실패

// 수정했는데도 실패했다 ㅠㅠ
// 뭘 놓쳤을까

// 다양한 케이스를 넣어보자 엣지케이스 같은 것들
// 음 다양한 케이스를 넣어봐도 숫자가 잘 출력되는 것 같은데..

// ----

// 그냥 백준 사이트에서 잠깐 처리가 안되었나 보다.
// 다시 돌리니까 문제 잘 풀렸음.

// 포인트는 완전탐색이고,
// 조금 더 효율적으로 풀려면 숫자 범위를 제한할 수 있다.

function calcNumberAndDigitSum(number) {
  const digitSum = number
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));

  return number + Number(digitSum);
}

const n = 1;

let answer = 0;

// 숫자 길이 구함
const numberLength = n.toString().split("").length;

// 자리별 최대 자연수 9 상수 처리(내 실수 방지)
const MAX_DIGIT = 9;

// 어디까지 탐색할지 설정
// '숫자 - (9 * 숫자길이)' 가 최대 범위

const minNumber =
  n - MAX_DIGIT * numberLength > 0 ? n - MAX_DIGIT * numberLength : 1;

for (let i = minNumber; i < n; i++) {
  // 최소값을 탐색하는데 가능한 범위의 가장 작은 숫자부터 탐색하므로 찾으면 탐색을 중지해도 된다.
  if (calcNumberAndDigitSum(i) === n) {
    answer = i;
    break;
  }
}

console.log(answer);

//---

const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);

// 숫자에 대해서 분해합 구하는 함수
function calcNumberAndDigitSum(number) {
  const digitSum = number
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));

  return number + Number(digitSum);
}

let answer = 0;

// 숫자 길이 구함
const numberLength = n.toString().length;

// 자리별 최대 자연수 9 상수 처리(내 실수 방지)
const MAX_DIGIT = 9;

// 어디까지 탐색할지 설정
// '숫자 - (9 * 숫자길이)' 가 최대 범위

const minNumber =
  n - MAX_DIGIT * numberLength > 0 ? n - MAX_DIGIT * numberLength : 1;

for (let i = minNumber; i < n; i++) {
  // 최소값을 탐색하는데 가능한 범위의 가장 작은 숫자부터 탐색하므로 찾으면 탐색을 중지해도 된다.
  if (calcNumberAndDigitSum(i) === n) {
    answer = i;
    break;
  }
}

console.log(answer);
