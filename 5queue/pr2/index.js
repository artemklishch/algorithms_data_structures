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
    if (this.isEmpty()) {
      this.prepend(value);
      this.last = this.head;
      this.listSize++;
      return;
    }
    this.last.next = new Node(value);
    this.last = this.last.next;
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
    return this.head === null;
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
    return this.data.head === null;
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
    return this.data.head.value;
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
    const first = this.data.head.value;
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

// O(1) - everywhere
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(23);
queue.enqueue(12);
console.log(JSON.stringify(queue, null, 2));
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(JSON.stringify(queue, null, 2));
