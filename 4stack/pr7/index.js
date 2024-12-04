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
    return this.data.slice(0, this.top + 1);
  }
}

/**
 * @param {string[]} ops
 *
 * @returns {number}
 */
function calcPoints(ops) {
  const stack = new StackArray(ops.length);
  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i])) {
      stack.push(+ops[i]);
    }
    if (ops[i] === "+") {
      stack.push(stack.data[stack.top] + stack.data[stack.top - 1]);
    }
    if (ops[i] === "C") {
      stack.pop();
    }
    if (ops[i] === "D") {
      stack.push(stack.peek() * 2);
    }
  }
  return stack.serialize().reduce((acc, v) => acc + v, 0);
}

const ops1 = ["5", "2", "C", "D", "+"]; // 30
const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"]; // 27

console.log(calcPoints(ops2));
