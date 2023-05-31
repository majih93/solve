// 재귀함수 복습

// What is a recursive function?

// A function that calls itself
// WITH a some kind of break condition

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }

  console.log("hooray");
}

console.log(countDown(10));

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("hooray");
    return;
  }

  console.log(n);
  countDownRecursive(n - 1);
}

console.log(countDownRecursive(5));

// 반복문과 재귀 모두 적용가능한 경우, 보통은 반복문이 더 빠르다 ( 함수 호출의 코스트 때문에 )

/**
 * In general, the looped way is normally faster than the recursive way for solving problems because recursive algorithms tend to incur a higher overhead due to the recursive function calls and the associated memory usage for each call.

Recursion involves calling a function within itself repeatedly until a certain condition is met. Each recursive call requires additional memory to be allocated on the stack for the new function call, which can add up quickly and cause performance issues.

On the other hand, a looped algorithm typically only requires a fixed amount of memory for the loop variables, making it more memory-efficient and potentially faster than a recursive algorithm.
 */

/**
 * In terms of memory, overhead refers to the additional memory required by a program or system beyond the actual data being processed or stored. This can include memory used by the operating system or other system components, as well as memory used by the program for tasks such as managing data structures or allocating memory dynamically.

Overhead can be an important consideration in memory-constrained environments, such as embedded systems or mobile devices, where every byte of memory usage counts. Excessive overhead can lead to reduced performance, increased memory usage, or even memory exhaustion, which can cause the program or system to crash or behave unpredictably.

To optimize memory usage and minimize overhead, developers often employ techniques such as memory pooling, data compression, and careful memory management practices, such as avoiding unnecessary allocations and releasing memory when it is no longer needed.
 */
