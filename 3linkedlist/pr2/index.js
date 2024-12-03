class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.listSize = 0;
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.listSize++;
      return;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
    this.listSize++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.listSize++;
      return;
    }
    node.next = this.head;
    this.head = node;
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.listSize === 0;
  }

  getLast() {
    if (this.listSize === 0) {
      return null;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    return lastNode.value;
  }

  getFirst() {
    if (this.listSize === 0) {
      return null;
    }
    return this.head.value;
  }

  clear() {
    this.head = null;
    this.listSize = 0;
  }

  delete(value) {
    let previosNode = null;
    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = currentNode.next;
      this.listSize--;
      return;
    }
    while (currentNode.next !== null && currentNode.value !== value) {
      previosNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    }
    previosNode.next = currentNode.next;
    this.listSize--;
  }

  serialize() {
    if (this.listSize === 0) {
      return [];
    }
    if (this.listSize === 1) {
      return [this.head.value];
    }
    const array = [];
    let lastNode = this.head;
    while (lastNode !== null) {
      array.push(lastNode.value);
      lastNode = lastNode.next;
    }
    return array;
  }
}

const list = new LinkedList();

// console.log(list.size()); // 0
console.log(list.getFirst());
// list.append(1);
// console.log(list.size()); // 1
// console.log(list.getLast()); // 1;
// console.log(list.getFirst()); // 1;
// list.append(2);
// console.log(list.getFirst()); // 1
// console.log(list.getLast()); // 2
// list.prepend(3);
// console.log(list.getFirst()); // 3
// console.log(list.getLast()); // 2

// console.log(list.serialize()); // [3, 1, 2]
// console.log(list.size()); // 3
// console.log(list.isEmpty()); // false
// list.delete(1);
// console.log(list.size()); // 2
// console.log(list.serialize()); // [3, 2]
// list.clear();
// console.log(list.size()); // 0
// console.log(list.isEmpty()); // true
// console.log(list.serialize()); // []
