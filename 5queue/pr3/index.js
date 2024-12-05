class QueueArray {
  constructor(size) {
    this.data = new Array(size);
    this.front = 0;
    this.rear = 0;
  }

  /**
   * Return whether the queue is empty
   *
   * @returns {number}
   */
  isEmpty() {
    return this.rear === this.front;
  }

  /**
   * Add value to the queue
   * @param {number} value
   *
   * @returns {void}
   */
  enqueue(value) {
    if (this.isFull()) {
      return null;
    }
    this.data[this.rear] = value;
    this.rear++;
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
    return this.data[this.front];
  }

  /**
   * Return the first added value and remove it from the queue
   *
   * @returns {number|null}
   */
  dequeue() {
    // O(n)
    if (this.isEmpty()) {
      return null;
    }
    const value = this.peek();
    for (let i = 0; i < this.rear; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.rear--;
    return value;
  }

  /**
   * Empty the queue
   *
   * @returns {void}
   */
  clear() {
    this.front = 0;
    this.rear = 0;
  }

  isFull() {
    return this.rear === this.data.length;
  }

  /**
   * Serialize the queue
   *
   * @returns {number[]}
   */
  serialize() {
    return this.data.slice(0, this.rear + 1);
  }
}

const queue = new QueueArray(2);
queue.enqueue(1);
queue.enqueue(2);
console.log(JSON.stringify(queue, null, 2));
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(JSON.stringify(queue, null, 2));
