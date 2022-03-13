class Node {
    constructor(value){
      // The value we pass in
      this.value = value;
      // pointer to the next node 
      this.next = null;
      // pointer to the previous node
      this.prev = null;
    }
  }
  
  class DoublyLikedList {
    constructor(value) {
     this.head = {
       value,
       next: null,
       prev: null
     };
  
     this.tail = this.head;
      
  
     this.length = 1;
    };
  
    // append item to the VERY END of the linked list
    append(value){
      const newNode = new Node(value);
  
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
  
      this.length++;
      
      return this;
    };
  
    // PRE-pend item to the FIRST of the Linked list 
    prepend(value) {
      const newNode = new Node(value);
     
      newNode.next = this.head;
      this.head.prev = newNode;
  
      this.head = newNode;
      this.length++;
  
      return this;
    }
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
    
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
  
      return currentNode;
    }
  
    printList () {
      const list = [];
      let currentNode = this.head;
  
      while(currentNode !== null) {
         list.push(currentNode.value);
         currentNode = currentNode.next;
      }
  
      return list;
    };
  
    // INSERT item into the linked list 
    insert(index, value) {
     if (index >= this.length) {
       return this.append(value)
     }   
  
     const newNode = new Node(value);
    
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
  
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
  
    this.length++;
  
    return this.printList()
    }
  
    // REMOVE item from Doubly linkedList 
    remove(index) {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
    
      leader.next = follower;
      follower.prev = leader;
  
      this.length--;
  
      return this.printList();
    }
  }
  
  const myDoublyLinkedList = new DoublyLikedList(10)
  myDoublyLinkedList.append(30)
  myDoublyLinkedList.prepend(20)
  myDoublyLinkedList.append(2025)
  myDoublyLinkedList.insert(1, 15)
  console.log(myDoublyLinkedList.remove(1))
  
  console.log(myDoublyLinkedList)