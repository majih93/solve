// 공주 구하기

/**
 * sudo 코드 종이에 작성하고 구현하는 형태로 처리하였음 -> 도움이 많이 되네!
 */

function mySol(num, K) {
  let answer;

  let princes = [];
  let stack = [];

  let curIndex = 0;

  for (let i = 1; i <= num; i++) {
    princes.push(i);
  }

  while (princes.length > 1) {
    stack.push(princes[curIndex]);
    if (stack.length < K) {
      // index 처리
      if (curIndex === princes.length - 1) {
        curIndex = 0;
      } else {
        curIndex++;
      }
    } else {
      // 스택 초기화
      stack = [];
      princes.splice(curIndex, 1);

      if (curIndex === princes.length) {
        curIndex = 0;
      }
    }
  }

  answer = princes[0];

  return answer;
}

console.log(mySol(8, 3)); // 7

// 선생님 풀이

/**
 * 큐를 이용하는 것이 골자
 *
 * 처음에 큐에 1 ~ N 까지 왕자들을 다 집어 넣는다. -> Array.from
 *
 * 큐에서, k-1번만큼 반복되는 문 안에서 큐의 앞에서 숫자 빼서 뒤에 넣는다. push(shift())
 * 반복 끝난 후에, 제일 앞에 숫자 제거 -> while + for 문으로 풀면 어떨지?
 */

// console.log(Array.from({ length: 8 }, (v, i) => i + 1));

function tSol(n, k) {
  let answer;

  let queue = Array.from({ length: 8 }, (v, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }

    console.log(queue);
    queue.shift();

    console.log("------------");
  }

  answer = queue[0];

  // or answer = queue.shift();

  return answer;
}

console.log(tSol(8, 3)); // 7

// 큐로 푸니까 훨씬  더 직관적이고 깔끔하고만
