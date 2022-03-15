// By Thinh (Howard) Phung 2022

// BUILDING HASHtable DAta structure
class HashTable {
    constructor(size) {
      this.data = new Array(size);
    };
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, val) {
      let address = this._hash(key);
  
      if (!this.data[address]) {
        this.data[address] = [];
      }
  
      this.data[address].push([key, val]);
  
      return this.data;
    }
  
    get(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
  
      if (!currentBucket) return undefined;
  
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    };
  
    keys() {
      const keysArray = [];
  
      if (!this.data.length) return undefined;
  
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      };
  
      return keysArray;
    };
  };
  
  // const myHashTable = new HashTable(50);
  // myHashTable.set('apple', 1000)
  // myHashTable.set('orange', 54)
  // myHashTable.set('strawberry', 45)
  // console.log(myHashTable.get('orange'))
  // console.log(myHashTable.data)
  
  // console.log(myHashTable.keys())
  ////////////////////////////////////////////////////
  const firstRecurringCharacter = (input) => {
    let map = {};
  
    for (let i = 0; i < input.length; i++) {
      console.log(map[input[i]]);
      if (map[input[i]] !== undefined) {
        return input[i];
      } else {
        map[input[i]] = i;
      }
    }
    return undefined;
  }
  
  console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))