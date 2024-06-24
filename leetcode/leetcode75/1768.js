// 1768. Merge String Alternatively;

var mergeAlternately = function (word1, word2) {
  let answer = "";
  // 반복문 범위 정하기 위해서 두 단어 중 더 긴 단어의 길이 저장
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    // i가 유효한 인덱스(각 단어의 길이 - 1 보다 작거나 같은값)인지 확인 후 answer에 더해주는 처리
    if (i < word1.length) {
      answer += word1[i];
    }
    if (i < word2.length) {
      answer += word2[i];
    }
  }

  return answer;
};
