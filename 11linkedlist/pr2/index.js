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

  find(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode?.value || null;
  }

  delete(value) {
    if (this.isEmpty()) {
      return;
    }
    let current = this.head;
    let previos = null;
    if (current.value === value) {
      this.head = current.next;
      return;
    }
    while (current !== null && current.value !== value) {
      previos = current;
      current = current.next;
    }
    if (current === null) {
      return;
    }
    previos.next = current.next;
    if (previos.next === null) {
      this.tail = previos;
    }
  }
}

const list = new LinkedList();
list.append("list");
list.append("is");
list.prepend("linked");
list.insertBefore(3, "nice");
list.insertBefore(3, "very");
list.insertBefore(100, "!");
console.log(list.find("nice"));
console.log(JSON.stringify(list, null, 1));
list.delete("nice");
console.log(JSON.stringify(list, null, 1));
console.log(list.find("nice"));
