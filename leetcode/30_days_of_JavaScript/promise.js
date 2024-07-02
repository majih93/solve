// Add 2 promises

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

// const result = async () => {
//   const r = await promise1;

//   console.log(r);
// };

const allPromises = Promise.all([promise1, promise2]);

const result2 = async () => {
  const r = await allPromises;

  // console.log("hrere");
  console.log(r);

  const sum = r.reduce((a, b) => a + b);
  console.log(sum);

  return sum;
};

// console.log(result2());

result2();

// array destructuring 사용하는 것도 도움이 된다.

const arr = [1, 2];

const [one, two] = arr;

console.log(one, two); // 1,2
