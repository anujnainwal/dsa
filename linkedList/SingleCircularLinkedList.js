// =====================================================
// Node Class
// =====================================================
class Node {
  constructor(data) {
    this.data = data; // Store value
    this.next = null; // Pointer to next node
  }
}

// =====================================================
// Circular Singly Linked List
// =====================================================
class CircularLinkedList {
  constructor() {
    this.head = null; // First node
    this.tail = null; // Last node
    this.size = 0; // Maintain size
  }

  // =====================================================
  // Check if list is empty
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

    // Case 1: If list is empty
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
      newNode.next = this.head; // Circular link
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // Maintain circular link
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
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
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

    newNode.next = current.next;
    current.next = newNode;

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

    // Only one node
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }

    this.size--;
  }

  // =====================================================
  // Delete At End
  // Time Complexity: O(n)
  // =====================================================
  deleteAtEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      this.head = this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;

    // Move to node before tail
    while (current.next !== this.tail) {
      current = current.next;
    }

    current.next = this.head;
    this.tail = current;

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

    // Move to position - 1
    for (let i = 1; i < position - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;

    this.size--;
  }

  // =====================================================
  // Traversal (Very Important - Use do-while)
  // Time Complexity: O(n)
  // =====================================================
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let result = "";
    let current = this.head;

    do {
      result += current.data + " -> ";
      current = current.next;
    } while (current !== this.head);

    console.log(result + "(back to head)");
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
let list = new CircularLinkedList();

list.insertAtFirst(10);
list.insertAtFirst(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtPosition(25, 3);

list.print();

list.deleteAtFirst();
list.deleteAtEnd();
list.deleteAtPosition(2);

list.print();

console.log("Size:", list.getSize());
