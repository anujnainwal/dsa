// ✅ Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ✅ Linked List Class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ================================
  // ✅ INSERT OPERATIONS
  // ================================

  // Insert at Start
  insertAtFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at End
  insertAtEnd(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    this.size++;
  }

  // Insert at Specific Position
  insertAtPosition(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Position");
      return;
    }

    if (index === 0) {
      this.insertAtFirst(data);
      return;
    }

    let newNode = new Node(data);
    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;

    this.size++;
  }

  // ================================
  // ✅ DISPLAY
  // ================================

  display() {
    let temp = this.head;
    let result = "";

    while (temp !== null) {
      result += temp.data + " -> ";
      temp = temp.next;
    }

    result += "NULL";
    console.log(result);
  }

  // ================================
  // ✅ SEARCH OPERATION
  // ================================

  search(value) {
    let temp = this.head;
    let index = 0;

    while (temp !== null) {
      if (temp.data === value) {
        console.log(`Value ${value} found at index ${index}`);
        return true;
      }
      temp = temp.next;
      index++;
    }

    console.log(`Value ${value} not found`);
    return false;
  }

  // ================================
  // ✅ DELETE OPERATIONS
  // ================================

  // Delete from Start
  deleteFromStart() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

  // Delete from End
  deleteFromEnd() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      this.size--;
      return;
    }

    let temp = this.head;

    while (temp.next.next !== null) {
      temp = temp.next;
    }

    temp.next = null;
    this.size--;
  }

  // Delete from Specific Position
  deleteFromPosition(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Position");
      return;
    }

    if (index === 0) {
      this.deleteFromStart();
      return;
    }

    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
    this.size--;
  }

  // Delete by Value
  deleteByValue(value) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let temp = this.head;

    while (temp.next !== null && temp.next.data !== value) {
      temp = temp.next;
    }

    if (temp.next === null) {
      console.log("Value not found");
      return;
    }

    temp.next = temp.next.next;
    this.size--;
  }

  // ================================
  // ✅ EXTRA IMPORTANT METHODS
  // ================================

  // Reverse Linked List
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    this.head = prev;
  }

  // Find Middle Node
  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log("Middle Node =", slow.data);
    return slow.data;
  }

  // Get Size
  getSize() {
    return this.size;
  }
}

//
// ✅ Testing All Operations
//

let list = new LinkedList();

list.insertAtFirst(10);
list.insertAtFirst(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtPosition(25, 2);

list.display();
// 20 -> 10 -> 25 -> 30 -> 40 -> NULL

list.search(30);

list.deleteFromStart();
list.display();

list.deleteFromEnd();
list.display();

list.deleteFromPosition(1);
list.display();

list.deleteByValue(25);
list.display();

list.reverse();
list.display();

list.findMiddle();

console.log("Size =", list.getSize());