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
 * @param {string} S
 *
 * @returns {string}
 */
// function removeAdjacentDuplicates(S) {
//   let updatedString = "";
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === S[i + 1]) {
//       updatedString = S.substring(0, i) + S.substring(i + 2);
//     }
//   }
//   if (updatedString.length) {
//     return removeAdjacentDuplicates(updatedString);
//   } else {
//     return S;
//   }
// }
function removeAdjacentDuplicates(S) {
  const stack = new StackArray(S.length);
  for (let i = 0; i < S.length; i++) {
    if (S[i] === stack.peek()) {
      stack.pop();
      continue;
    } else {
      stack.push(S[i]);
    }
  }
  return stack.serialize();
}

console.log(removeAdjacentDuplicates("abbaca")); // ca
console.log(removeAdjacentDuplicates("abca")); // abca
