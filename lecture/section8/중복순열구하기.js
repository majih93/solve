// 중복순열 구하기

// 중복을 허용한다는 것을 프로그래밍적으로 보면 어떤 의미가 되는 것일까?

// 순열 -> 순서가 중요하다!
// 1 2 와 2 1 은 서로 다른 case 로 처리되어야 한다.

// 다중 for 문으로 풀게 되면, 뽑아야 하는 표본이 증가할 수록 많이 반복되어야 한다.
// 재귀로 이 이슈를 일관되게 처리할 수 있는 로직으로 구현할 수 있음 -> L === M 이 되는 순간까지 for 문이 자동으로 중첩되는 형태가 된다.

function solution(N, M) {
  // 가능한 조합 console 에 찍는 형태로 구현

  const tempArr = Array(M).fill(0);

  function DFS(L) {
    if (L === M) {
      // 가장 마지막 노드에 도착해서 처리
      console.log(tempArr);
    } else {
      // 세 가닥으로 뻗어야 한다.
      for (let i = 1; i <= N; i++) {
        tempArr[L] = i;

        DFS(L + 1);
      }
    }
  }

  DFS(0);
}

solution(3, 2);

// 코드 실행 순서

// tempArr[0,0] 으로 시작

// DFS(0) 실행

// for 문 실행 , L === 0
// i = 1 의 분기
// tempArr[1,0]

// DFS(1) 실행
// 1번째 분기 tempArr[1,1] -> DFS(2) -> 출력
// 2번째 분기 tempArr[1,2] -> DFS(2) -> 출력
// 3번째 분기 tempArr[1,3] -> DFS(2) -> 출력

// i = 2 의 분기
// tempArr[2,0]

// i = 3 의 분기
// tempArr[3,0]
