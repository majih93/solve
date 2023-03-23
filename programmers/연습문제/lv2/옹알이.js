// 옹알이(2)

/**
 * 전략
 *
 * 경우의 수 분리하는 기준 세워서 처리
 *
 * 문자열 3개 / 2개에 따라 달라짐
 */

function solution(babbling) {
  let answer = 0;

  for (let word of babbling) {
    // 각 단어별로 발음 할 수 있는지 저장할 변수

    let splitCount = 0;
    let isPronounceable = true;

    while (splitCount < word.length) {
      if (word[splitCount] === "a") {
        if (word.substr(splitCount, 3) === "aya") {
          console.log(word.substr(splitCount - 3, 3));
          if (splitCount !== 0) {
            if (word.substr(splitCount - 3, 3) !== "aya") {
              splitCount += 3;
            } else {
              isPronounceable = false;
              break;
            }
          } else {
            splitCount += 3;
          }
        } else {
          isPronounceable = false;
          break;
        }
      } else if (word[splitCount] === "w") {
        if (word.substr(splitCount, 3) === "woo") {
          if (splitCount !== 0) {
            if (word.substr(splitCount - 3, 3) !== "woo") {
              splitCount += 3;
            } else {
              isPronounceable = false;
              break;
            }
          } else {
            splitCount += 3;
          }
        } else {
          isPronounceable = false;
          break;
        }
      } else if (word[splitCount] === "y") {
        if (word.substr(splitCount, 2) === "ye") {
          if (splitCount !== 0) {
            if (word.substr(splitCount - 2, 2) !== "ye") {
              splitCount += 2;
            } else {
              isPronounceable = false;
              break;
            }
          } else {
            splitCount += 2;
          }
        } else {
          isPronounceable = false;
          break;
        }
      } else if (word[splitCount] === "m") {
        if (word.substr(splitCount, 2) === "ma") {
          if (splitCount !== 0) {
            if (word.substr(splitCount - 2, 2) !== "ma") {
              splitCount += 2;
            } else {
              isPronounceable = false;
              break;
            }
          } else {
            splitCount += 2;
          }
        } else {
          isPronounceable = false;
          break;
        }
      } else {
        isPronounceable = false;
        break;
      }
    }

    if (isPronounceable) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
console.log(solution(["aya", "yee", "u", "maa"]));

console.log("yeye".substr(0, 0));
