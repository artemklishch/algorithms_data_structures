class StackArray {
  constructor(size) {
    this.data = new Array(size);
    this.top = -1;
  }

  isFull() {
    return this.top === this.data.length - 1;
  }

  /**
   * Add value to the stack
   * @param {number} value
   *
   * @returns {void}
   */
  push(value) {
    if (this.isFull()) {
      console.log("PUSH: Stack is full");
      return null;
    }
    this.top += 1;
    this.data[this.top] = value;
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
    return this.top < 0;
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
    return this.data[this.top];
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
    this.top--; // не видаляє елементи автоматично
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

const stack = new StackArray(3);
stack.push(2); // O(1)
stack.push(1); // O(1)
stack.push(3);
console.log(stack.pop());
console.log(JSON.stringify(stack, null, 2));
console.log(JSON.stringify(stack.peek())); // 1, O(1)
// console.log(JSON.stringify(stack.pop())); // 1, O(1)
// console.log(JSON.stringify(stack.peek())); // 2
// console.log(stack.isEmpty()); // O(1)
