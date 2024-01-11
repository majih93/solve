function solution(new_id) {
  const validCharacters = ["-", "_", "."];

  for (let i = 97; i <= 122; i++) {
    validCharacters.push(String.fromCharCode(i));
  }

  // 순차적으로 처리
  // 1번 && 2번 같이 수행 (iteration) + 3번도
  let three_result = "";
  for (let ch of new_id) {
    const lowerCase = ch.toLowerCase();

    if (validCharacters.includes(lowerCase) || !isNaN(ch)) {
      if (ch === ".") {
        if (three_result[three_result.length - 1] !== ".") {
          three_result += lowerCase;
        }
      } else {
        three_result += lowerCase;
      }
    }
  }

  let four_result = three_result;
  // 4번째
  if (three_result[0] === ".") {
    four_result = three_result.substring(1);
  }

  if (four_result && four_result[four_result.length - 1] === ".") {
    four_result = four_result.substring(0, four_result.length - 1);
  }

  // 5단계
  let five_result = four_result;

  if (five_result === "") five_result = "a";

  // 6단계
  let six_result = five_result.substring(0, 15);

  if (six_result[six_result.length - 1] === ".") {
    six_result = six_result.substring(0, six_result.length - 1);
  }

  console.log(six_result);

  // 7단계
  let seven_result = six_result;

  if (seven_result.length <= 2) {
    const lastCharacter = seven_result[seven_result.length - 1];
    while (seven_result.length < 3) {
      seven_result += seven_result[seven_result.length - 1];
    }
  }

  return seven_result;
}

solution("z-+.^.");

// 무식하게 풀었는데, 정작 문제 출제의도는 정규식을 활용하는 것이였던 것 같음

const solution = (new_id) => {
  const id = new_id
    .toLowerCase() // Step 1: Convert to lowercase
    .replace(/[^\w\d-_.]/g, "") // Step 2: Remove characters other than alphanumeric, hyphen, underscore, and dot
    .replace(/\.{2,}/g, ".") // Step 3: Replace consecutive dots with a single dot
    .replace(/^\.|\.$/g, "") // Step 4: Remove leading and trailing dots
    .padEnd(1, "a") // Step 5: If the string is empty, pad it with a single 'a'
    .slice(0, 15) // Step 6: Keep only the first 15 characters
    .replace(/^\.|\.$/g, ""); // Step 7: Remove leading and trailing dots again
  return id.padEnd(3, id[id.length - 1]); // Step 8: If the resulting string is less than 3 characters, pad it with the last character
};
