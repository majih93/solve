// 205. Isomorphic Strings

// 1 대 1로 대칭되어서 관계가 되어야 한다.
// 대칭되는 값이 있는 글자는 해당 값으로 대칭되어야 함
var isIsomorphic = function (s, t) {
  let result = true;
  const matched = new Set(); // 이미 매칭된 t의 글자를 저장 / 중복 저장 방지에 사용
  const sMap = {};

  for (let i = 0; i < s.length; i++) {
    // 이미 매칭된 값이 있는 경우
    // 매칭된 값과 다른 값인 경우 result = false, break
    // 없는 경우
    //// t의 값이 이미 사용된 적이 있는 경우 result - false, break
    //// 없는 경우 -> matched에 저장, sMap에 저장.
    if (sMap[s[i]] !== undefined) {
      if (sMap[s[i]] !== t[i]) {
        result = false;
        break;
      }
    } else {
      if (matched.has(t[i])) {
        result = false;
        break;
      } else {
        matched.add(t[i]);
        sMap[s[i]] = t[i];
      }
    }
  }

  return result;
};

// 약간 좀 우악스럽게 풀어낸 것 같음.

// 오 근데 제일 공감 많이 받은 답안이 나랑 거의 똑같은 형태로 풀어냈네.
// 좋다!
