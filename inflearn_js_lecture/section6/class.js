// 교육과정 설계

/**
 * 스택으로 할 필요도 없지 않나?
 * 그냥 필요한 것만 쌓고, 정리한다 느낌으로 가면 된다.
 */
function mySol(predicate, str) {
  let sequence = "";

  for (let x of str) {
    if (predicate.includes(x)) sequence += x;
  }

  if (sequence === predicate) return "YES";

  return "NO";
}

console.log(mySol("CBA", "CBDAGE")); // 'YES'
