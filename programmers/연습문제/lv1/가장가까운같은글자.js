// 가장 가까운 같은 글자

// Map 을 이용해서 풀어볼 수 있을 듯

{
  function mySol(s) {
    let answer = [];

    let stringMap = new Map(); // 데이터 저장할 Map

    // 순회
    for (let i = 0; i < s.length; i++) {
      // 이미 있으면 차이 구해서 처리
      if (stringMap.has(s[i])) {
        // 마지막으로 기록된 자리를 현재 자리에서 빼서 answer 에 기록
        answer.push(i - stringMap.get(s[i]));

        // 자리 업데이트 ( 현재 인덱스 값으로)
        stringMap.set(s[i], i);
      } else {
        // 없는 경우 -1 배열에 넣고
        answer.push(-1);

        // Map 에 자리값 등록
        stringMap.set(s[i], i);
      }
    }

    return answer;
  }

  console.log(mySol("banana"));
  console.log(mySol("foobar"));
}
