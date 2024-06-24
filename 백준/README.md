# 백준 nodejs 환경에서 입력값 처리하는 방법

백준에서는 nodejs환경에서 문제를 풀려면 입력을 받는 처리부터 되어야 한다.

입력값이 텍스트 파일로 주어지기 때문에 fs라는 모듈을 활용해서 경로에서 파일을 파싱하는 처리가 필요하다.

입력 경로는 `/dev/stdin` 이라고 한다.

입력의 형태에 따라서 처리가 달라져야 한다.

```javascript
const fs = require("fs");

// 입력값이 한 개일 때(한 줄)
// trim()함수를 통해서 혹시 존재할 수 있는 공백을 제거하는 것으로 보임
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 입력값이 여러 개 이고, 한 줄에 공백으로 구분되어서 입력 시
// toSplit() 함수에 공백을 인자로 전달해서 공백을 기준으로 값을 분리해서 배열에 담기도록 처리
const input = fs.readFileSync("/dev/stdin").toString().trim().toSplit(" ");

// 입력값 첫 번째 줄에는 입력값의 길이 그리고 두 번째 줄에 공백으로 입력된 입력값이 주어질 때
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");

// 입력값 첫 번째 줄에는 입력값의 길이 그리고 한 줄에 입력값이 하나씩 입력되는 경우
const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```
