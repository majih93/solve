// 중복 단어 제거

// 객체 만들어서, key 값이 존재하지 않으면 결과 배열에 더하고, 존재하면 pass 하는 형태로 구현해보자.

function solution(stringArr) {
  let stringObj = {};

  let answer = [];

  for (let x of stringArr) {
    if (stringObj[x] === undefined) {
      stringObj[x] = true;
      answer.push(x);
    }
  }

  return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));

// 선생님풀이는?

// indexOf 는 항상 일치하는 첫 번째 index 값만을 반환한다는 점을 이용해서, 반환하는 인덱스와 해당 값의 인덱스가 일치하는 경우에만 true를 return 하는 filter 함수를 통해 배열을 filter하는 형태로 구현하셨음

//indexOf 는 일치하는 값이 없는 경우 -1 을 반환
