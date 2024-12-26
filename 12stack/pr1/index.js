class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  _addFirstElement(value) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }
    const node = new DoublyLinkedListNode(value);
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }
    const node = new DoublyLinkedListNode(value);
    node.next = this.head;
    this.head = node;
    this.head.next.previous = this.head;
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
    const node = new DoublyLinkedListNode(value);
    node.next = parent.next;
    parent.next = node;
    node.previous = parent;
    node.next.previous = node;
    if (node.next === null) {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  popBack() {
    if (this.isEmpty()) {
      return;
    }
    const backElement = this.tail;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    }
    return backElement;
  }

  popFront() {
    if (this.isEmpty()) {
      return;
    }
    const frontElement = this.head;
    if (this.head) {
      this.head = this.head.next;
    }
    return frontElement;
  }
}

class Stack {
  constructor() {
    this.listOfElements = new DoublyLinkedList();
  }

  push(value) {
    this.listOfElements.append(value);
  }

  peek() {
    if (!this.listOfElements.isEmpty()) {
      return this.listOfElements.tail?.value || null;
    }
  }

  pop() {
    if (this.listOfElements.isEmpty()) { 
      return;
    }
    return this.listOfElements.popBack();
  }
}

const stack = new Stack();

stack.push("Harry Potter: Philosopher");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
