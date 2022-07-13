// By Howard Phung - 2022, July, 12
///////////////////////////////////////
// ELEMENTARY SORT
///////////////////////////////////////

// Bubble Sort: Bubble the highest value 
function bubbleSort(array) {
    if (array.length === 0) return 'Please enter valid array';
    const length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (array[j] > array[j + 1]) {
          // swap
          const temp = array[j + 1];
          array[j + 1] = array[j]
          array[j] = temp;
        }
      }
    }
  
    return array;
}

// Selection Sort: Select the smallest value through interations
