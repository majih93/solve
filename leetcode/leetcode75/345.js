// 345. Reverse Vowels of a String

// 모음인지 확인하는 함수
function isVowel(ch) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(ch.toLowerCase());
}

var reverseVowels = function (s) {
  const sArray = s.split("");

  const vowelArray = [];

  // vowel 인덱스
  const idxArray = []; // 공간 효율성 문제 있을수도...

  // vowel 추출
  for (let i = 0; i < sArray.length; i++) {
    if (isVowel(sArray[i])) {
      vowelArray.push(sArray[i]);
      idxArray.push(i);
    }
  }

  vowelArray.reverse();

  for (let i = 0; i < vowelArray.length; i++) {
    sArray[idxArray[i]] = vowelArray[i];
  }

  return sArray.join("");
};
