// By Howard Phung - 2022, July, 12
///////////////////////////////////////
// ELEMENTARY SORT
///////////////////////////////////////

// Bubble Sort: Bubble the highest value
function bubbleSort(array) {
  if (array.length === 0) return "Please enter valid array";
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

/* Complexity analyst:
 Worst and Avarage case: O(n^2), Space: O(1)
 Best: when array already sorted: O(n) time 
*/

// Selection Sort: Select the smallest value through interations
function selectionSort(array) {
  if (array.length === 0) return "Please enter valid array";
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let smallestIdx = i;

    for (let j = i + 1; j < length; j++) {
      if (array[smallestIdx] > array[j]) smallestIdx = j;
      // looping until find the smallest idx inside the interation
    }
    // and then swap the number
    swap(array, i, smallestIdx);
  }

  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// Time: O(n^2) - exponential, space: O(1)

//////////////////////////////////////////////
// Insertion sort: 
// Conceptual Overview: Divide the input array into 2 subarray, 1 subarray (subarray1) should be sorted all the time. 1 subarray (subarray2) is unsorted
// keep looping through the unsorted array, and then INSERT the number to correct position in subarray1

// 1. using while loop
function insertionSort(array) {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j-1, array);
      j--;
    }
  };
  return array;
};

// 2. using for loop
function insertionSort(array) {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) { // j =1 
      if (array[j] < array[j-1]) swap(j, j -1, array);
    }
  };

  return array;
};
