// 재귀함수 복습

// 재귀 - 자기 자신을 호출하는 절차
// 재귀함수 - 함수 정의 단계에서 자신을 재 창조하는 함수

// 재귀함수 작성의 두 가지 핵심 구성요소
// 1. 종료조건
// 2. 다른 입력값

// 재귀패턴 주의사항
// -> return 이 있어야 한다.

// 1보다 큰 자연수 n 부터 1까지 출력하는 재귀함수를 작성해보자.
// -> 혼자서 구현 성공하였음(230801)
function recursive_number(n) {
  // 종료조건
  if(n === 1) {
    console.log(1);
    return;
  }

  console.log(n);
  recursive_number(n-1);
}

// 3
// recursive_number(3); // 3 2 1


// 피보나치 등 간단한 로직에서 시작해서,
// 퀵정렬 알고리즘 자료구조 참고해서 구현해보는 연습하면 좋을 듯.

// 1부터 n까지의 합 구하는 sumRange 함수 구현.
const sumRange = (n, sum) => {
  if(n === 1) {
    return sum+=1
  }
  
  sum += n;

  console.log(n, sum);
  return sumRange(n-1, sum);
};

// const sum = sumRange(5, 0);
// console.log(sum);

// sumRange(5,0)
// sumRange(4,5)
// sumRange(3,9)
// sumRange(2,12)
// sumRange(1,14)

// takeaway -> return 하는 형태로 코드를 짰어야 함. 아니면 1에서 다 받아서 return 할 수 있도록 하던지.

// 재귀함수로 퀵정렬 구현해보기.

// 퀵정렬이란?

// pivot(중심축)을 정하고, 중심축보다 작은 값들은 왼쪽으로 큰 값들은 오른쪽으로 보낸 후에, pivot 우측에 대해서 
// 해당 행위를 다시 실행하는 반복을 통해 데이터를 정렬하는 방법

// 퀵정렬 특징
// Divide and Conquer 방식임. 왜? 데이터를 분할하고, 부분집합에 대해서 우선적으로 필요한 처리를 하는 형태로 이루어져 있음.
// 하나의 순환주기마다 적어도 하나의 원소(pivot)는 최종적인 위치가 fix 되므로, 이 알고리즘은 n개의 데이터에 대해서 n번의 순환호출 시 반드시 끝남이 보장된다.

// pivot element 로 무엇을 선택하는지는 자유

// 정수 배열을 정렬하는 연습을 해보자.

// const arr = [-6, 20, 8, -2, 4];

// pivot으로 마지막 요소를 선택했다고 생각해보자.

// 4가 pivot 인 상태에서, 4 전까지 배열순회하면서 4보다 작은 값은 left, 큰 값은 right 배열에 삽입
// left = [-6, -2,], right = [20, 8], pivot = [4] 이렇게 되겠다.

// left / right 배열에 대해서 같은 작업 실행

// left array 
// pivot: -2, left = [-6], right = []


// right array
// pivot = 8, left=[], right = [20],

// 배열 요소가 한 개인 경우 이미 그 자체로 정렬된 배열
// left + pivot + right 형태로 붙여 나간다.
// left: [-6,-2] right: [8, 20], pivot: 4

// [-6, -2, 4, 8, 20];

// 일단 로직을 인지한 상태에서 코드로 구현을 시도해보자.

// 
const quickSort = (arrayToSort) => {
  // 종료조건: 더이상 정렬이 필요없는 배열인 상태.
  // 해당 배열 길이가 0이거나 1인 경우 배열 자체를 return 
 if(arrayToSort.length <= 1) return arrayToSort;

 // 길이 2 이상인 배열에 대해서는 정렬 처리가 필요.
 const leftArr = [];
 const rightArr = [];

 const pivotNumber = arrayToSort[arrayToSort.length - 1];

 // pivotNumber 를 가장 마지막 요소로 설정했으므로, 마지막에서 두 번째 인덱스까지만 탐색해야 한다.
 for(let i = 0; i < arrayToSort.length - 1; i++) {
    if(arrayToSort[i] > pivotNumber) rightArr.push(arrayToSort[i])
    else leftArr.push(arrayToSort[i]);
 }

 // 처리 후에, left, right 에 대해서 다시 정렬 처리 실행
 const sortedLeft = quickSort(leftArr)
 const sortedRight = quickSort(rightArr)

 sortedLeft.push(pivotNumber)

 return sortedLeft.concat(sortedRight);
}


// const one = [1]
// const two = [2, 1];
// const six = [-6, 20, 8, -2, 4];

// const oneResult = quickSort(one)
// const twoResult = quickSort(two)
// const sixResult = quickSort(six)

// console.log(oneResult) // [1]
// console.log(twoResult) // [1,2]
// console.log(sixResult) // [ -6, -2, 4, 8, 20 ]

// 오우!! 퀵정렬 알고리즘 구현 성공.

// 물론 약간의 삽질은 하였다.

// pivot element 전까지 탐색해야한다는 점.





