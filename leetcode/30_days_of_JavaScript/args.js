function test() {
  return arguments.length;
}

console.log(test(1, 2, 3)); // 3

function test2(...args) {
  console.log(args); // 인자들의 배열로 처리
  return args.length;
}

console.log(test2(1, 2, 3, 4)); // 4
