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
    this.last = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.last = node;
      this.listSize++;
      return;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
    this.last = node;
    this.listSize++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.last = node;
      this.listSize++;
      return;
    }
    node.next = this.last = this.head;
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
    this.last = null;
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

  deleteInPosition(position) {
    if (position === 0) {
      this.head = this.head.next;
      this.listSize--;
      return;
    }
    let previosNode = this.head;
    for (let i = 0; previosNode !== null && i < position - 1; i++) {
      previosNode = previosNode.next;
    }
    if (previosNode === null || previosNode.next === null) {
      return;
    }
    previosNode.next = previosNode.next.next;
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

class Stack {
  constructor() {
    this.data = new LinkedList();
  }
  /**
   * Add value to the stack
   * @param {number} value
   *
   * @returns {void}
   */
  push(value) {
    this.data.prepend(value);
  }

  /**
   * Return stack size
   *
   * @returns {number}
   */
  size() {
    // write code here
  }

  /**
   * Return whether stack is empty
   *
   * @returns {number}
   */
  isEmpty() {
    return this.data.head === null;
  }

  /**
   * Return the last added value
   *
   * @returns {number|null}
   */
  peek() {
    if (this.isEmpty()) {
      console.log("PICK: Stack is empty");
      return null;
    }
    return this.data.head.value;
  }

  /**
   * Return the last added value and remove it from the stack
   *
   * @returns {number|null}
   */
  pop() {
    if (this.isEmpty()) {
      console.log("POP: Stack is empty");
      return null;
    }
    const value = this.peek();
    this.data.deleteInPosition(0);
    return value;
  }

  /**
   * Empty the stack
   *
   * @returns {void}
   */
  clear() {
    // write code here
  }

  /**
   * Serialize the stack
   *
   * @returns {number[]}
   */
  serialize() {
    // write code here
  }
}

const stack = new Stack();
stack.push(2); // O(1)
stack.push(1); // O(1)
// console.log(JSON.stringify(stack, null, 1));
console.log(JSON.stringify(stack.peek())); // 1, O(1)
console.log(JSON.stringify(stack.pop())); // 1, O(1)
console.log(JSON.stringify(stack.peek())); // 2
// console.log(stack.isEmpty()); // O(1)
