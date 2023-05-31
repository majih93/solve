function solution(progresses, speeds) {
  let answer = [];

  if (progresses.length === 1) return [1];

  let durations = progresses.map((element, index) => {
    return Math.ceil((100 - element) / speeds[index]);
  });

  console.log(durations);

  let p1 = 0;
  let p2 = 1;

  let tempCount = 1;

  while (p1 < durations.length && p2 < durations.length) {
    if (durations[p1] < durations[p2]) {
      if (p2 === durations.length - 1) {
        answer.push(tempCount);
        answer.push(1);
        break;
      }

      console.log(p1, p2)

      p1 = p2;
      p2 = p1 + 1;

      answer.push(tempCount);
      tempCount = 1;
    } else {
      if(p2 === durations.length - 1) answer.push(++tempCount)

      p2++;
      tempCount++;
    }
  }

  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
