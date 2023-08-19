var mergeAlternately = function (word1, word2) {
  let answer = "";

  const firstArray = [...word1];
  const secondArray = [...word2];

  const maxLength = Math.max(firstArray.length, secondArray.length);

  for (let i = 0; i < maxLength; i++) {
    if (firstArray[i]) answer += firstArray[i];
    if (secondArray[i]) answer += secondArray[i];
  }

  return answer;
};

// 특이한 점

// string 을 배열로 변환 후 탐색하는 경우가, 시간이 더 적게 걸리고 메모리도 덜쓰는 것으로 결과가 나옴
// 이유가 뭔지??
