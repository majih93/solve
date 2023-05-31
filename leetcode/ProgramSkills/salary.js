var average = function (salary) {
  salary.sort((a, b) => a - b);

  salary.pop();
  salary.shift();

  console.log(salary);

  return salary.reduce((acc, curval) => acc + curval) / salary.length;
};

console.log(average([4000, 3000, 1000, 2000]));
