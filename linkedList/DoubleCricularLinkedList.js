// =====================================================
// Node Class (Double Circular)
// =====================================================
class Node {
  constructor(data) {
    this.data = data; // Store value
    this.next = null; // Forward pointer
    this.prev = null; // Backward pointer
  }
}

// =====================================================
// Double Circular Linked List
// =====================================================
class DoubleCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // =====================================================
  // Check if Empty
  // =====================================================
  isEmpty() {
    return this.size === 0;
  }

  // =====================================================
  // Insert At Beginning
  // Time Complexity: O(1)
  // =====================================================
  insertAtFirst(data) {
    let newNode = new Node(data);

    // Case 1: Empty list
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;

      this.head.prev = newNode;
      this.tail.next = newNode;

      this.head = newNode;
    }

    this.size++;
  }

  // =====================================================
  // Insert At End
  // Time Complexity: O(1)
  // =====================================================
  insertAtEnd(data) {
    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;

      this.tail.next = newNode;
      this.head.prev = newNode;

      this.tail = newNode;
    }

    this.size++;
  }

  // =====================================================
  // Insert At Specific Position
  // Time Complexity: O(n)
  // =====================================================
  insertAtPosition(data, position) {
    if (position < 1 || position > this.size + 1) {
      console.log("Invalid Position");
      return;
    }

    if (position === 1) {
      this.insertAtFirst(data);
      return;
    }

    if (position === this.size + 1) {
      this.insertAtEnd(data);
      return;
    }

    let newNode = new Node(data);
    let current = this.head;

    // Move to position - 1
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    let nextNode = current.next;

    newNode.next = nextNode;
    newNode.prev = current;

    current.next = newNode;
    nextNode.prev = newNode;

    this.size++;
  }

  // =====================================================
  // Delete At Beginning
  // Time Complexity: O(1)
  // =====================================================
  deleteAtFirst() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }

    this.size--;
  }

  // =====================================================
  // Delete At End
  // Time Complexity: O(1)
  // =====================================================
  deleteAtEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }

    this.size--;
  }

  // =====================================================
  // Delete At Specific Position
  // Time Complexity: O(n)
  // =====================================================
  deleteAtPosition(position) {
    if (position < 1 || position > this.size) {
      console.log("Invalid Position");
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

    for (let i = 1; i < position; i++) {
      current = current.next;
    }

    let prevNode = current.prev;
    let nextNode = current.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.size--;
  }

  // =====================================================
  // Forward Traversal
  // =====================================================
  forwardPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let result = "";
    let current = this.head;

    do {
      result += current.data + " ⇄ ";
      current = current.next;
    } while (current !== this.head);

    console.log("HEAD ⇄ " + result + "(back to HEAD)");
  }

  // =====================================================
  // Backward Traversal
  // =====================================================
  backwardPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let result = "";
    let current = this.tail;

    do {
      result += current.data + " ⇄ ";
      current = current.prev;
    } while (current !== this.tail);

    console.log("TAIL ⇄ " + result + "(back to TAIL)");
  }

  // =====================================================
  // Get Size
  // =====================================================
  getSize() {
    return this.size;
  }
}

// =====================================================
// Testing
// =====================================================
let list = new DoubleCircularLinkedList();

list.insertAtFirst(10);
list.insertAtFirst(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtPosition(25, 3);

list.forwardPrint();
list.backwardPrint();

list.deleteAtFirst();
list.deleteAtEnd();
list.deleteAtPosition(2);

list.forwardPrint();

console.log("Size:", list.getSize());
