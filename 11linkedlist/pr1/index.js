class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  _addFirstElement(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insertBefore(position, value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }
    if (position === 0) {
      return this.prepend(value);
    }
    let parent = this.head;
    for (let i = 1; i < position; i++) {
      if (parent.next === null) {
        break;
      }
      parent = parent.next;
    }
    const node = new Node(value);
    node.next = parent.next;
    parent.next = node;
    if (node.next === null) {
      this.tail = node;
    }
    this.length++;
  }
}

// const n1 = new Node(5);
// console.log(n1);

// const n2 = new Node(10);
// n1.next = n2;
// console.log(n1);

const list = new LinkedList();
list.append("list");
console.log(list);
list.append("is");
console.log(JSON.stringify(list, null, 1));
list.prepend("linked");
console.log(JSON.stringify(list, null, 1));
list.insertBefore(3, "nice");
console.log(JSON.stringify(list, null, 1));

list.insertBefore(3, "very");
console.log(JSON.stringify(list, null, 1));

list.insertBefore(100, "!");
console.log(JSON.stringify(list, null, 1));
