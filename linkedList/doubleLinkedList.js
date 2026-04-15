// ===============================
// Node Class
// ===============================
class Node {
  constructor(data) {
    this.data = data; // Step 1: Store value
    this.next = null; // Step 2: Pointer to next node
    this.prev = null; // Step 3: Pointer to previous node
  }
}

// ===============================
// Doubly Linked List Class
// ===============================
class DoubleLinkedList {
  constructor() {
    this.head = null; // Step 1: Starting node
    this.tail = null; // Step 2: Ending node
    this.size = 0; // Step 3: Maintain size
  }

  // ===============================
  // Check if list is empty
  // ===============================
  isEmpty() {
    return this.size === 0;
  }

  // ===============================
  // Insert At First
  // ===============================
  insertAtFirst(data) {
    // Step 1: Create new node
    let newNode = new Node(data);

    // Step 2: If list is empty
    if (this.isEmpty()) {
      this.head = this.tail = newNode; // Both head & tail point to new node
    } else {
      // Step 3: Connect new node forward
      newNode.next = this.head;

      // Step 4: Connect old head backward
      this.head.prev = newNode;

      // Step 5: Move head to new node
      this.head = newNode;
    }

    // Step 6: Increase size
    this.size++;
  }

  // ===============================
  // Insert At End
  // ===============================
  insertAtEnd(data) {
    // Step 1: Create new node
    let newNode = new Node(data);

    // Step 2: If empty
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      // Step 3: Connect new node backward
      newNode.prev = this.tail;

      // Step 4: Connect old tail forward
      this.tail.next = newNode;

      // Step 5: Move tail pointer
      this.tail = newNode;
    }

    // Step 6: Increase size
    this.size++;
  }

  // ===============================
  // Insert At Middle (Automatic)
  // ===============================
  insertAtMiddle(data) {
    // Step 1: Create new node
    let newNode = new Node(data);

    // Step 2: If empty
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      this.size++;
      return;
    }

    // Step 3: If only one node
    if (this.size === 1) {
      this.insertAtEnd(data);
      return;
    }

    // Step 4: Find middle index
    let mid = Math.floor(this.size / 2);

    let current = this.head;

    // Step 5: Move to node before middle
    for (let i = 0; i < mid - 1; i++) {
      current = current.next;
    }

    // Step 6: Store next node
    let nextNode = current.next;

    // Step 7: Connect new node
    newNode.prev = current;
    newNode.next = nextNode;

    // Step 8: Fix surrounding links
    current.next = newNode;
    if (nextNode) {
      nextNode.prev = newNode;
    }

    // Step 9: Increase size
    this.size++;
  }

  // ===============================
  // Insert At Specific Position
  // ===============================
  insertAtSpecificPosition(data, position) {
    // Step 1: Validate position
    if (position < 1 || position > this.size + 1) {
      console.log("Invalid position");
      return;
    }

    // Step 2: If first position
    if (position === 1) {
      this.insertAtFirst(data);
      return;
    }

    // Step 3: If last position
    if (position === this.size + 1) {
      this.insertAtEnd(data);
      return;
    }

    // Step 4: Create new node
    let newNode = new Node(data);

    let current = this.head;

    // Step 5: Traverse to position-1
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    // Step 6: Store next node
    let nextNode = current.next;

    // Step 7: Connect new node
    newNode.prev = current;
    newNode.next = nextNode;

    // Step 8: Fix surrounding links
    current.next = newNode;
    nextNode.prev = newNode;

    // Step 9: Increase size
    this.size++;
  }

  // ===============================
  // Delete At First
  // ===============================
  deleteAtFirst() {
    // Step 1: If empty
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    // Step 2: If single node
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      // Step 3: Move head forward
      this.head = this.head.next;

      // Step 4: Remove backward link
      this.head.prev = null;
    }

    // Step 5: Decrease size
    this.size--;
  }

  // ===============================
  // Delete At End
  // ===============================
  deleteAtEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      // Step 1: Move tail backward
      this.tail = this.tail.prev;

      // Step 2: Remove forward link
      this.tail.next = null;
    }

    this.size--;
  }

  // ===============================
  // Delete At Specific Position
  // ===============================
  deleteAtSpecificPosition(position) {
    // Step 1: Validate
    if (position < 1 || position > this.size) {
      console.log("Invalid position");
      return;
    }

    if (position === 1) {
      this.deleteAtFirst();
      return;
    }

    if (position === this.size) {
      this.deleteAtEnd();
      return;
    }

    let current = this.head;

    // Step 2: Traverse to position
    for (let i = 1; i < position; i++) {
      current = current.next;
    }

    // Step 3: Store neighbors
    let prevNode = current.prev;
    let nextNode = current.next;

    // Step 4: Reconnect neighbors
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    // Step 5: Reduce size
    this.size--;
  }

  // ===============================
  // Forward Traversal
  // ===============================
  forwardPrint() {
    let current = this.head;
    let result = "NULL ← ";

    while (current) {
      result += current.data + " ⇄ ";
      current = current.next;
    }

    result += "NULL";

    console.log(result);
  }

  // ===============================
  // Backward Traversal
  // ===============================
  backwardPrint() {
    let current = this.tail;
    let result = "NULL ← ";

    while (current) {
      result += current.data + " ⇄ ";
      current = current.prev;
    }

    result += "NULL";

    console.log(result);
  }

  getSize() {
    return this.size;
  }
}

// ===============================
// Testing
// ===============================
let list = new DoubleLinkedList();

list.insertAtFirst(5);
list.insertAtFirst(10);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtFirst(50);
list.insertAtMiddle(60);

list.forwardPrint();
list.backwardPrint();
console.log("Size:", list.getSize());
