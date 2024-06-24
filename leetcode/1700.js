// 1700. Number of Students Unable to Eat Lunch

function canStudentsEat(students, topSandwich) {
  return students.includes(topSandwich); // 포함하는지 여부를 확인하는 함수
}

function countStudents(students, sandwiches) {
  // 학생은 큐
  // 샌드위치는 스택
  // 스택이라고는 하는데, i=0이 top이라고 하네.

  // 샌드위치는 그냥 있으면 가져가고 아니면 말고이다.
  // 가져가면 stack에서 제거해야함 shift()

  // 반대로 학생은
  // 가져가면 shift, 아니면 shift한걸 다시 push
  if (!students.length || !canStudentsEat(students, sandwiches[0])) {
    return students.length;
  } else {
    // 학생과 샌드위치 일치하는 경우
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      // 일치하지 않는 경우
      const studentToSendToTheBack = students.shift();
      students.push(studentToSendToTheBack);
    }

    return countStudents(students, sandwiches);
  }
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
