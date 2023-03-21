// 크기가 작은 부분 문자열
{
  function mySol(t, p) {
    let answer = 0;

    let pNumberType = Number(p);

    // 문자열 처리 위해서 배열만들기 -> 첫 번째 문자열에 대해서는 처리되어 있음
    let tempArray = t.slice(0, p.length).split("");

    console.log(tempArray);
    console.log(Number(tempArray.join("")));

    if (Number(tempArray.join("")) <= pNumberType) {
      answer++;
    }
    // 문자열 순회하면서 배열을 처리해서 숫자 비교
    for (let i = 1; i < t.length - p.length + 1; i++) {
      tempArray.shift();
      tempArray.push(t[i + p.length - 1]);

      if (Number(tempArray.join("")) <= pNumberType) {
        answer++;
      }
    }

    return answer;
  }

  console.log(mySol("3141592", "271"));
}
