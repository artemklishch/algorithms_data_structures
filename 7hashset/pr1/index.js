class Node {
  constructor(key, value) {
    this.value = value;
    this.next = null;
    this.key = key;
  }
}

class HashMap {
  constructor() {
    this.data = new Array(16);
  }

  hash(key) {
    let code = 0;
    for (let i = 0; i < key.length; i++) {
      code += key.charCodeAt(i);
    }
    return code;
  }

  getIndex(key) {
    return this.hash(key) % 16;
  }

  set(key, value) {
    const node = new Node(key, value);
    const index = this.getIndex(key);
    if (this.data[index]) {
      let curNode = this.data[index];

      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      curNode.next = node;
    } else {
      this.data[index] = node;
    }
  }

  get(key) {
    let curNode = this.data[this.getIndex(key)];
    while (curNode && curNode.key !== key) {
      curNode = curNode.next;
    }
    if (curNode) {
      return curNode.value;
    }
    return undefined;
  }
}

const map = new HashMap();

// console.log(map.hash("bob") % 16);
// console.log(map.hash("alice") % 16);
// console.log(map.hash("john") % 16);

// console.log(map.getIndex("bob"));
// console.log(map.getIndex("alice"));
// console.log(map.getIndex("john"));

// console.log(map.get("bob"));
// console.log(map.get("bob1"));
// console.log(map.data);
map.set("bob", 3);
map.set("bob3", 35);
map.set("john", 13);
map.set("bob21", 15);
console.log(map.data);
console.log(map.get("bob3"));
console.log(map.get("bob21"));
