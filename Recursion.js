// By Howard Phung - 2022, July, 8
/*
 Recursion is not a Algorithms. It's more like a computer science concept
 using a lot during the coding interview. 

 Especially in Sorting, Searching questions 

 *, Simple definition: a Function define something in term of itself 
 **, 3 rules to write a recursive function:
    
    1. Define the `base case`: when function need to stop calling itself. Avoid stack overflow.
    2. Define the `recursive case`: case function calling itself over again. 
    3. Get closer and closer to the base case, and return the value at the end of this calling chain. 
    Usually we have 2 `returns` for base case, and recursive case. 
*/

////////////////////////////////////////////////////////////////////////
// RECURSION QUESTION //
////////////////////////////////////////////////////////////////////////

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialIterative(n) {
  if (n === 0 || n === 1) return 1;

  let answer = n;

  for (let i = n - 1; i >= 1; i--) {
    answer = answer * i;
  }

  //code here
  return answer;
}
// test case: 3! = 6, 4! = 24, 5! = 120, 0!  = 1, 1! = 1;

// console.log(findFactorialIterative(0));
// console.log(findFactorialIterative(1));
// console.log(findFactorialIterative(3));
// console.log(findFactorialIterative(4));
// console.log(findFactorialIterative(5));

// Time: O(n)
// space: O(1)

function findFactorialRecursive(n) {
    // base case
    if (n === 0) return 'Please enter valid number';
    if (n === 1) return 1;
    //recursive case
    return n * findFactorialRecursive(n - 1);
}
// console.log(findFactorialRecursive(4))
// f(4) = 4 * f(3) = 4 * 3 * f(2) = 4*3*2*f(1) = 4*3*2*1 = 24;
// Time: O(n)
// Space: O(1)