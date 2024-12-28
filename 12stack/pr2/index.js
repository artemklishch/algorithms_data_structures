class Stack {
  constructor() {
    this.arrayOfElements = [];
  }

  push(value) {
    this.arrayOfElements.push(value);
  }

  peek() {
    if (this.arrayOfElements.length > 0) {
      return (
        this.arrayOfElements[this.arrayOfElements.length - 1]?.value || null
      );
    }
  }

  pop() {
    if (this.arrayOfElements.length > 0) {
      return this.arrayOfElements.pop();
    }
  }
}

const stack = new Stack();

stack.push("Harry Potter: Philosopher");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

console.log("\n");

// ()
// {}
// []

// {([[]])}
// {([[]])}([])

function isValidParantheses(sequence) {
  const stack = new Stack();
  for (let i = 0; i < sequence.length; i++) {
    const char = sequence[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (
        (char === ")" && last !== "(") ||
        (char === "}" && last !== "{") ||
        (char === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(isValidParantheses("{([[]])}}"));
