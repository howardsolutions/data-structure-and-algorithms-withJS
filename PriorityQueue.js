// By Thinh (Howard) Phung @20 Jul 2023
/*
*************************************
Implement Priority Queue using Array
*************************************
*/ 

class PriorityQueue {
  constructor() {
    this.collection = [];
  };

  printCollection() {
    return this.collection;
  };

  isEmpty() {
    return this.collection.length === 0;
  };

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
      return this;
    }
    
    let added = false;
    
    for (let i = 0; i < this.collection.length; i++) {
      if (element[1] < this.collection[i][1]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      };
    };
  
    if (!added) this.collection.push(element);

    return this;
  };

  dequeue() {
    const value = this.collection.shift();
    return value[0];
  };

  front() {
    return this.collection[0];
  };

  size() {
    return this.collection.length;
  }
};

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
// pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
console.log(pq.printCollection());