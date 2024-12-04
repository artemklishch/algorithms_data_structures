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

/**
 * @param {string} S
 *
 * @returns {number}
 */
function minAddToMakeParenthesesValid(S) {
  const stack = new Stack();

  for (let i = 0; i < S.length; i++) {
    const current = S[i];

    if (current === "(") {
      stack.push(current);
      continue;
    }

    const last = stack.peek();

    if (last === "(") {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  return stack.size();
}

console.log(minAddToMakeParenthesesValid("()))((")); // 4
console.log(minAddToMakeParenthesesValid("())")); // 1
console.log(minAddToMakeParenthesesValid("(((")); // 3
console.log(minAddToMakeParenthesesValid("()")); // 0

// Щоб розпочати, спробуй розбити задачу на менші частини. Ось кілька кроків, які можуть допомогти:

// Розуміння задачі: Тобі потрібно додати мінімальну кількість дужок, щоб зробити рядок валідним. Валідний рядок має збалансовані відкриваючі та закриваючі дужки.
// Використання стеку: Стек добре підходить для задач з дужками, оскільки дозволяє легко відстежувати відкриті дужки, які ще не були закриті.
// Алгоритм:

// Пройдися по кожному символу в рядку.
// Якщо символ '(', додай його до стеку.
// Якщо символ ')', перевір, чи є в стеку '('. Якщо є, видали його зі стеку (це означає, що пара знайдена). Якщо немає, додай ')' до стеку (це означає, що закриваюча дужка не має пари).

// Підрахунок: Кількість елементів, що залишилися в стеку, буде кількістю дужок, які потрібно додати, щоб зробити рядок валідним.
// Спробуй реалізувати ці кроки, і якщо виникнуть питання, не соромся запитувати!
