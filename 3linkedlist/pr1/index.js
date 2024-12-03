class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
  }

  insertBefore(position, value) {
    const node = new Node(value);
    let parentNode = this.head;
    for (let i = 0; i < position; i++) {
      if (parentNode.next === null) {
        break;
      }
      parentNode = parentNode.next;
    }
    node.next = parentNode.next;
    parentNode.next = node;
  }

  deleteNode(value) {
    let previosNode = null;
    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = currentNode.next;
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
  }

  deleteInPosition(position) {
    if (position === 0) {
      this.head = this.head.next;
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
  }

  find(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}

const list = new LinkedList(2);
list.prepend(1); // O(1)
list.append(5); // O(n)
list.insertBefore(1, 3); // O(n)
list.insertBefore(10, 6); // O(n)
console.log(list);
console.log(JSON.stringify(list, null, 2));

console.log("\n");

list.deleteNode(3); // O(n)
list.deleteInPosition(1); // O(n)
console.log(JSON.stringify(list, null, 2));
console.log(list.find(5)); // O(n)
