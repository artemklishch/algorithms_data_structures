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

/**
 * @param {number[]} queuers
 * @param {number} pos
 *
 * @returns {number}
 */
function countTimeInQueue(queuers, pos) {
  const queue = new Queue();
  for (let i = 0; i < queuers.length; i++) {
    queue.enqueue(queuers[i]);
  }
  let count = 0;
  let currentPosition = pos;
  let ticketsToBy = queuers[pos];
  while (ticketsToBy > 0) {
    count++;
    if (currentPosition === 0) {
      ticketsToBy--;
      if (ticketsToBy === 0) {
        return count;
      }
      const first = queue.dequeue();
      queue.enqueue(first - 1);
      currentPosition = queue.size();
    } else {
      const first = queue.dequeue();
      if (first > 1) {
        queue.enqueue(first - 1);
      }
    }
    currentPosition--;
  }
}

const arr1 = [2, 5, 3, 4, 6]; // pos 2, 12
const arr2 = [1, 2, 3]; // pos 0, 1
const arr3 = [1, 2, 3]; // pos 1, 4
const arr4 = [2, 5, 3, 6, 4]; // pos 1, 18

console.log(countTimeInQueue(arr2, 1));
