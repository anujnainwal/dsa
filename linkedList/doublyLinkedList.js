class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //inserting at first position.

    insertAtNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }
        this.tail.prev = newNode
        newNode.prev = this.tail
        this.tail = newHead

    }
}