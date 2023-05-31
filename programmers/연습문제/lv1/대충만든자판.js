// 대충만든 자판

function mySol(keyMap, targets) {
  let answer = [];

  for (let targetWord of targets) {
    let tempSum = 0; // 해당 단어 알파벳 별로 최소 입력횟수 합칠 변수
    for (let alphabet of targetWord) {
      let tempMin = 101; // 각 알파벳별로
      // 단어의 각 알파벳별로 keyMap 의 각 키에 대해서 검증이 필요하다
      for (let key of keyMap) {
        let indexOfAlphabetIfKeyHas = key.indexOf(alphabet) + 1;

        if (targetWord === "AAFGZE") {
          console.log(key, alphabet, indexOfAlphabetIfKeyHas);
        }

        // console.log(key, alphabet, indexOfAlphabetIfKeyHas);

        if (indexOfAlphabetIfKeyHas === 0) {
          // key 에 알파벳이 없는 경우
          continue;
        } else {
          if (indexOfAlphabetIfKeyHas < tempMin) {
            // console.log("최소 입력횟수 변경");
            tempMin = indexOfAlphabetIfKeyHas; // 누르는 횟수니까 1 더해줘야 한다
          }
          // key 에 알파벳이 있는 경우
        }
      }

      // key 다 돌았는데 tempMin 이 101인 경우, 즉 해당 알파벳을 가진 키가 없는 경우 -> 이 단어는 만들수가 없는 단어 -> -1을 배열에 push 하고 break
      if (tempMin === 101) {
        answer.push(-1);
        tempSum = 0;
        break;
      } else {
        console.log("tempSum에 값 더해짐");
        console.log(tempMin);
        tempSum += tempMin; // 아니면 tempSum 에 해당 알파벳의 최소로 눌러야되는 횟수 누적
      }
    }

    if (tempSum !== 0) {
      console.log("배열에 추가");
      console.log(tempSum);
      answer.push(tempSum);
    }

    console.log(answer);
  }

  return answer;
}

console.log(mySol(["ABACD"], ["ABCD", "AABB", "ZFAE", "AAFGZE"]));
// console.log(mySol(["AA"], ["B"]));
// console.log(mySol(["AGZ", "BSSS"], ["ASA", "BGZ"]));

// 실패하는 케이스가 생기네..이유가 뭘까.
// 뭘 놓쳤을까 내가
function mySol2() {}

// console.log(mySol2(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
// console.log(mySol2(["AA"], ["B"]));
// console.log(mySol2(["AGZ", "BSSS"], ["ASA", "BGZ"]));

// 후기

// tempSum 값을 초기화해주지 않아서, tempSum이 0 일거라고 생각한 케이스에 대해서 그렇지 않은 케이스가 있었다.
// 더 조건 처리를 꼼꼼하게 하고, 코드 로직 흐름을 잘 파악해야 한다.
