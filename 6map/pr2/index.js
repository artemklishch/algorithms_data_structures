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
      // code += key.charCodeAt(i); // key[0] * 31 ^ (n-1) + key[1] * 31 ^ (n-2) + key[2] * 31 ^ (n-3)
      code += key.charCodeAt(i) * (31 ^ (key.length - 1 - i)); // це ускладнення потрібно, щоб уникнути повторення хешкодів при схожих ключах
      // та забезпечити різноманіття індексів для збереження значення більш рівномірно в масиві бакетів
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

map.set("ac", 3);
map.set("bb", 4);
map.set("ca", 5);

console.log(map.data);
console.log(map.get("ca"));
