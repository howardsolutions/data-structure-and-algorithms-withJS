// By Thinh (Howard) Phung 2022

class myArray {
    constructor() {
      this.length = 0;
      this.data = {}
    };
  
    get(index) {
      return this.data[index];
    };
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    };
  
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    };
  
    //       [1,3,4]
    // index: 0,1,2
    // length = 3
    // index = 2 ==>
  
    // [1,2,3,4,5]
    // [1,3,4,5]
    // length = 5
    // index = 1
  
    shiftItem(index) {
      if (index >= this.length - 1) {
        console.log("please enter valid index item you want to delete!")
      }
  
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
  
      delete this.data[this.length - 1];
      this.length--;
    }
  
    delete(index) {
      const item = this.data[index];
      this.shiftItem(index);
      return item;
    }
  };
  
  const newArr = new myArray();
  newArr.push('nemo');
  newArr.push('ferari');
  newArr.push('blackberry');
  newArr.delete(1)
  console.log(newArr)