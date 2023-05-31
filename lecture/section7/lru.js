// Least Recently Used

/**
 * 첫 다섯번은 그냥 배열에 푸쉬해주면 된다. -> 아니네... 만약에 그 다섯번 중에서도 겹치는 값이 있으면 따로 처리를 해줘야하므로 무조건 배열에 넣는다고 되는게 아니다.
 * 그 뒤로는, 해당 요소가 배열에 있는지 탐색
 * -> 있으면 해당 요소와 0번 인덱스 교환 -> 교환이 아니라, 0번 인덱스에 해당 값이 들어가도록 정렬해야한다.
 * -> 없으면 pop(), unshift()
 */

function mySol(array) {
  let answer = [0, 0, 0, 0, 0];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    if (answer.includes(array[i])) {
      let currentIndex = answer.indexOf(array[i]);

      // 해당 요소는 제일 앞에 넣고, 해당 요소로부터 앞쪽에 있는 요소들은 다 한칸씩 뒤로 이동해야 한다.
      for (let j = currentIndex - 1; j >= 0; j--) {
        // 삽입정렬에서 제일 마지막까지 도는 케이스랑 같음
        answer[j + 1] = answer[j];
      }
      answer[0] = temp;
    } else {
      answer.pop();
      answer.unshift(array[i]);
    }
    count++;
  }
  return answer;
}

console.log(mySol([1, 2, 3, 2, 6, 2, 3, 5, 7])); // 답은 맞았는데 과정이 틀렸음

// 함수 호출을 이상하게 하니까 그렇지..
