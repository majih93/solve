// 최대 부분 증가수열
// Longest Increasing Subsequence ( 매우 유명한 다이나믹 주제!! )

// 문제가 이해 자체가 잘 안되는군 흠

// 가운데 숫자를 몇 개 뽑아서, 증가하는 가장 길이가 큰 배열을 구해라!

// 작은 문제의 해결법이 큰 문제의 해결법이다..라..

// 결국 최적의 선택을 어떻게 하느냐의 문제인데..

// 작은 문제가 뭘까?
// 둘 중에 더 큰 수를 선택하는 것인데..

// 무턱대고 큰 수를 선택한다고 해서 되는 게 아닌데...

// 흠... dynamic 으로 하면 간단하다는데...

// dy = dynamic 배열의 i 번째 요소의 의미는?
// arr 의 i 번째 숫자가 증가 수열의 마지막 숫자라고 의미를 부여

// 즉 해당 항이 증가 수열의 마지막 항이라고 생각했을 때, 증가 수열의 길이를 각 요소의 index에 해당되는 dy의 index 위치의 값으로 담는 것.
// 그러면 각 요소가 마지막이라고 생각할 경우의 수를 모든 수에 대해서 계산해야 하는거구만.

// 각 항별로, 이전 요소들을 탐색하면서 가장 길이가 길었던 배열의 길이 + 1 (숫자가 더 큰 경우에 한해서)
// -> 그러면 각 자리별로 해당 자리까지 끊었을 때, 가장 길이가 긴 배열의 길이가 담긴다.

// 각 자리 별로 해당 자리까지 가장 긴 부분 배열의 길이를 담을 배열이 하나 필요하다.

// 각 요소별로, 해당 요소의 index - 1 ~ 0번 인덱스까지 탐색하면서 해당 요소 보다 작은 숫자인 경우 중 가장 배열의 길이가 긴 요소를 찾고 거기에 ++ 해서 기록하는 형태로 구현

function solution(arr) {
  let answer = 0;

  let maxLengthForEachElement = Array(arr.length).fill(0);

  // 0 번째 인덱스, 즉 제일 첫 번째 요소는 최대 길이가 1이므로 일단 1로 고정시키고 시작
  maxLengthForEachElement[0] = 1;

  // 각 요소별로 탐색 시작
  for (let i = 1; i < arr.length; i++) {
    // 각 요소 별로 이전의 모든 요소를 탐색
    let max = 0; // 최대 길이를 담을 변수

    // 현재 인덱스 - 1 ~ 0까지 탐색
    for (let j = i - 1; j >= 0; j--) {
      // arr의 해당 요소가 탐색 요소보다 큰 경우
      if (arr[j] < arr[i] && maxLengthForEachElement[j] > max) {
        max = maxLengthForEachElement[j];
      }
      // 탐색 완료 후, max 를 배열에 저장
      maxLengthForEachElement[i] = max + 1;

      answer = Math.max(answer, maxLengthForEachElement[i]);
    }
  }

  return answer;
}

const arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
