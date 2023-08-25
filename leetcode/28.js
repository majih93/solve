// 28. Find the Index of the First Occurrence in a String

// indedOf 를 사용하면 금방 풀 수 있는데, 그게 문제의도는 아니겠지..?

// 굳이 따지자면 오히려 indexOf 동작을 직접 구현해보아라 정도가 되겠다.

// 일단 시작하는 지점이 일치해야하므로, 해당 지점을 찾고,

// 일치하는 글자가 있는 경우, iterate 하면서 비교
// 첫 번째 글자 인덱스 저장
// 일치하는 경우 인덱스 return,
// answer false 로 초기화
// answer 에 값 할당하는 형태로 구현

function indexof_implement(haystack, needle) {
  const needleFirstLetter = needle[0];

  let isComparing = false; // 비교중인지 여부 저장할 flag
  let needleIndex = 0; // needle 검색 인덱스
  let hayStackNeedleSameTextStartIndex = 0; // 일치하는 첫 번째 글자 인덱스 저장할 변수
  let sameLetterWhileComparingIndex = -1; // 비교 중 첫 번째 글자와 일치하는 글자가 다시 등장하는 경우 최초 존재 인덱스 저장

  for (let i = 0; i < haystack.length; i++) {
    // needleIndex === needle.length 가 된 경우 (다 일치한 경우)
    // 마지막에 딱 일치하는 경우, 숫자가 ++처리 된 후에 처리가 안돼서 망함.
    // 비교해서 처리하는 코드를 제일 밑으로 빼면?
    // if (needleIndex === needle.length) {
    //   return hayStackNeedleSameTextStartIndex;
    // }

    if (isComparing) {
      // 비교시 맞으면 needleIndex++
      if (haystack[i] === needle[needleIndex]) {
        // needle 첫 번째 글자와 일치하는 글자 등장시, 최초 등장 케이스인 경우 저장
        if (
          haystack[i] === needleFirstLetter &&
          sameLetterWhileComparingIndex === -1
        ) {
          sameLetterWhileComparingIndex = i;
        }

        needleIndex++;
      } else {
        // 만약에 이전 존재 케이스
        if (sameLetterWhileComparingIndex !== -1) {
          i = sameLetterWhileComparingIndex; // 해당 인덱스로 return
          needleIndex = 1;
          hayStackNeedleSameTextStartIndex = sameLetterWhileComparingIndex;
          sameLetterWhileComparingIndex = -1; // 다시 -1로 처리
        } else {
          isComparing = false;
          sameLetterWhileComparingIndex = -1;
        }

        // 틀리면 비교 아닌 상태로 변경 (만약에 해당 글자가 첫 번째 글자와 일치한다면 이어지는 코드에 걸림)
      }
    }

    // haystack 의 글자가 needle 의 첫 번째 글자와 일치하는지 찾기
    if (haystack[i] === needleFirstLetter && !isComparing) {
      isComparing = true;
      needleIndex = 1;
      hayStackNeedleSameTextStartIndex = i;
      sameLetterWhileComparingIndex = -1;
    }

    // 필요한 ++ 처리가 다 된 후에 조건 충족 여부를 체크해서 처리하면
    // 가장 마지막 인덱스에 딱 일치하는 경우에 처리를 포함할 수 있다. ( 기존에는 이 비교 코드를 for 문 제일 위에 위치시켰더니 edge케이스 - butsad, sad 와 같은 케이스가 처리가 안됨)
    if (needleIndex === needle.length) {
      return hayStackNeedleSameTextStartIndex;
    }
  }

  return -1;
}

// console.log(indexof_implement("adbutsad", "sad"));

console.log(indexof_implement("mississippi", "issip")); // 4여야 하는데, -1이 반환됨

// 엣지 케이스에 대해서 더 생각하는 습관이 필요하다.

// 이미 지나간 케이스에 대해서 다시 처리가 필요하구나...흠..
// issis -> 처리가 안됨 -> 다음부터 처리해버리는데,
// issis 의 두 번째 i 에서 다시 비교가 시작되어야 한다.

// 지나간 케이스로 돌아가도록 처리하면?
// 같은 글자인 경우, 기억이 되어야 한다.

// 같은 글자가 존재하는 경우 -> 저장
// 비교 중인데 이번에 글자가 일치하지 않는 경우에
// 같은 글자가 존재했다면
// 해당 글자로 i를 초기화 및 맞춰서 필요한 처리

// 이렇게 처리하니까 통과는 함.
// 그런데 시간및 공간 활용이 엉망이다. 최적화가 필요한 상태.
