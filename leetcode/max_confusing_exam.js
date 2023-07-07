// Maximize the Confusion of an Exam

var maxConsecutiveAnswers = function (answerKey, k) {
  let maxLength = 0;

  let maxCount = 0;

  let counts = { T: 0, F: 0 };

  let left = 0;

  for (let right = 0; right < answerKey.length; right++) {
    counts[answerKey[right]]++;
    maxCount = Math.max(maxCount, counts[answerKey[right]]);

    // invalid window case
    if (right - left + 1 - maxCount > k) {
      counts[answerKey[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
