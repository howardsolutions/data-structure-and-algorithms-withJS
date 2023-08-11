// Solution 1: Use build in methods;
const reverse = (string) => {
    const reversedString = string.split("")
      .reverse()
      .join("");
  
    return reversedString;
  };
  
  // reverse("12345")
  
  // Solution 2: 
  const reverse2 = (str) => {
    // validate the string;
    if (!str || typeof str !== 'string' || str.length < 2) {
      return 'Please enter valid string';
    }
  
    const backwards = [];
    const totalItems = str.length - 1;
  
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    };
  
    console.log(backwards)
  
    return backwards.join('');
  };
  
  // const result = reverse2('Thinh')
  // console.log(result)
  
  ///////////////////////////////
  // array question 2: MERGE sorted array.
  
  function mergeSortedArr(arr1, arr2) {
    const mergedArrs = [...arr1, ...arr2];
    console.log(mergedArrs)
    const sortedArrs = mergedArrs.sort((a, b) => a - b);
  
    return sortedArrs;
  };
  
  console.log(mergeSortedArr([4, 0, 8], [20, 10, 5]));