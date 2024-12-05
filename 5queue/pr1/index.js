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

  push(value) {
    this.data.prepend(value);
  }

  isEmpty() {
    return this.data.head === null;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.head.value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.peek();

    this.data.deleteInPosition(0);

    return value;
  }

  size() {
    return this.data.size();
  }
}

class Queue {
  constructor() {
    this.data = new LinkedList();
  }

  /**
   * Return whether the queue is empty
   *
   * @returns {number}
   */
  isEmpty() {
    return this.data.listSize === 0;
  }

  /**
   * Add value to the queue
   * @param {number} value
   *
   * @returns {void}
   */
  enqueue(value) {
    this.data.append(value);
  }

  /**
   * Return queue size
   *
   * @returns {number}
   */
  size() {
    return this.data.size();
  }

  /**
   * Return the first added value
   *
   * @returns {number|null}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data.getFirst();
  }

  /**
   * Return the first added value and remove it from the queue
   *
   * @returns {number|null}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const first = this.data.getFirst();
    this.data.deleteInPosition(0);
    return first;
  }

  /**
   * Empty the queue
   *
   * @returns {void}
   */
  clear() {
    this.data.clear();
  }

  /**
   * Serialize the queue
   *
   * @returns {number[]}
   */
  serialize() {
    return this.data.serialize();
  }
}
