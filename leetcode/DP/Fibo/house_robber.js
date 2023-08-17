// house robber

// 하나 이전 숫자까지의 최대 액수 중 가장 큰 숫자에 해당 숫자를 더한 값이 해당 숫자까지의 최대 액수라는 점을 확대해서 문제 풀이

function solution(nums) {
  // 배열 길이가 2 이하인 경우에 대해서 처리를 빼먹었다.
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const dy = Array(nums.length).fill(0);

  // 첫 두개의 숫자는 해당 숫자가 털 수 있는 최대 금액
  dy[0] = nums[0];
  dy[1] = nums[1];

  // 두 숫자 중 최대값으로 우선 초기화
  let answer = Math.max(dy[0], dy[1]);

  for (let i = 2; i < nums.length; i++) {
    let max = 0;

    // i = 이번에 최대 액수를 정해주어야 하는 nums 배열의 인덱스

    // 전전 인덱스 숫자부터 0번 인덱스까지 탐색하면서, 최대 액수를 구하고 해당 최대 액수 값에 이번 액수를 더해서 dy배열의 해당 인덱스에 저장
    for (let j = i - 2; j >= 0; j--) {
      if (dy[j] > max) max = dy[j]; // 최대 액수로 max 설정
    }

    dy[i] = max + nums[i]; // 최대 액수값 = 이전까지 최대 액수 + 이번에 터는 액수

    answer = Math.max(answer, dy[i]); // 정답에 최대 액수 비교해서 할당하는 처리 매번 실행
  }

  return answer;
}

const nums1 = [1, 2, 3, 1];
const nums2 = [2, 7, 9, 3, 1];

console.log(solution(nums1)); // 4
console.log(solution(nums2)); // 12

// 변수가 여전히 존재하다는 점을 기억해야 한다.
