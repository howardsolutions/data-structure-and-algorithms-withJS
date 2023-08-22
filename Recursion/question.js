// Time: O(n) , Space: O(n)
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(4));
const factorialI = function (num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

const sumIterative = (nums) => {
  let sum = 0;

  while (nums.length > 0) {
    let current = nums.pop();
    sum += current;
  }

  return sum;
};

// console.log(sumIterative([1, 5, 7, -2]));
// console.log(sumIterative([6, 3, 1]));

// TIME: O(n), SPACE: O(n)
const sumR = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return nums.pop() + sumR(nums);
};

// Time O(n^2), Space: O(n);
const sumR2 = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  return nums.shift() + sumR2(nums);
};

console.log(sumR2([1, 5, 7, -2]));
