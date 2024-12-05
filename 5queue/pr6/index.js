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

/**
 * @param {number[]} customers
 * @param {number} n
 *
 * @returns {number}
 */
function countQueueTime(customers, n) {
  if (!customers.length) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((acc, h) => acc + h);
  }
  const queue = new QueueArray(customers.length);
  for (let i = 0; i < customers.length; i++) {
    queue.enqueue(customers[i]);
  }
  const kassas = Array(n).fill(0);
  let isFirstInteration = true;
  while (!queue.isEmpty()) {
    if (isFirstInteration) {
      isFirstInteration = false;
      for (let i = 0; i < kassas.length; i++) {
        kassas[i] = queue.dequeue();
      }
    }
    let minValueIndex = 0;
    const minTimeInKassas = kassas.reduce((acc, v, index) => {
      if (v < acc) {
        minValueIndex = index;
        return v;
      }
      return acc;
    });
    const firstValue = queue.dequeue();
    kassas[minValueIndex] = firstValue + minTimeInKassas;
  }
  return kassas.reduce((acc, v) => (v > acc ? v : acc));
}

const arr1 = [5, 3, 4]; // k 1, 12
const arr2 = [10, 2, 3, 3]; // k 2, 10
const arr3 = [2, 3, 10]; // k 2, 12

console.log(countQueueTime(arr1, 1));
