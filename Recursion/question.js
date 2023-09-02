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

// console.log(sumR2([1, 5, 7, -2]));

// Time: O(2^N)
// Space: O(N)

const fib = (n) => {
  if (n < 0) throw new Error("invalid index");
  if (n === 0) return 1;
  if (n === 1) return 1;

  // recursive case
  return fib(n - 1) + fib(n - 2);
};

////////////////////////////////////////////////
// COMBINATIONS ///////////////////////////////
////////////////////////////////////////////////
/**
 * Combination is a collection of things where the order is NOT MATTER
 
  find all posible combination of array's elements
  Needs: 1) Combinations without the first element 
        2) Combinations with the first element
        then merge 1 and 2 together to get the final result

  Time: O(2^N)
  Space: O(N^2) - store N element on the callstack and with each element store another N-1 extra space for the `rest` Array
**/
const combinations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements.at(0);
  const rest = elements.slice(1);
  const combsWithoutFirstEl = combinations(rest);
  const combsWithFirstEl = combsWithoutFirstEl.map((comb) => [
    ...comb,
    firstEl,
  ]);

  return [...combsWithoutFirstEl, ...combsWithFirstEl];
};

// console.log(combinations(["a", "b", "c"]));

////////////////////////////////////////////////
// PERMUTATIONS ///////////////////////////////
////////////////////////////////////////////////

/* 
  understanding the patterns: 
  1) each iterations: take out the First Element
  2) recursively invoke permutations on the rest of the array until it hits the base case
  3) recursive function gonna return the `permutations with out first element List`
  4) Insert the first element into the list at every possible position will create a permutations list at the end.
*/

// Time: O(N!)
// Space: O(N^2)
const permutations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements.at(0);
  const rest = elements.slice(1);

  const allPermutations = [];
  const permsWithoutFirst = permutations(rest);

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permsWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPermutations.push(permsWithFirst);
    }
  });

  return allPermutations;
};

// console.log(permutations(["a", "b", "c"]));
