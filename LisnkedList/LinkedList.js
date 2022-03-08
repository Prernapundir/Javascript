class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert at First
  inertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert at last
  insertLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  //Insert at Index
  insertAtIndex(data, index) {
    //If first Index
    if (index == 0) {
      this.head = this.inertFirst(data);
    }
    let node = new Node(data);
    let current = this.head,
      prev;
    let k = 0;
    while (k < index) {
      k++;
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
    this.size++;
  }

  //Get at index
  getAt(index) {
    if (index >= this.size) return "Not found";
    let current = this.head;
    let k = 0;
    while (k != index && current) {
      k++;
      current = current.next;
    }
    return current.data;
  }

  //Remove at index
  removeAt(index) {
    if (index > this.size || index < 0) return "Cant remove";
    let current = this.head,
      prev;
    let k = 0;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (k < index) {
        k++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      this.size--;
    }
  }

  //clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print the list
}

const l1 = new LinkedList();
l1.inertFirst(2);
l1.inertFirst(4);
l1.inertFirst(6);
l1.insertLast(8);
l1.insertAtIndex(10, 2);
let val = l1.getAt(4);
console.log(val);
l1.removeAt(0);
l1.clearList();

console.log(l1);
