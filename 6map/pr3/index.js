class Node {
  constructor(key, value) {
    this.value = value;
    this.next = null;
    this.key = key;
  }
}

class HashMap {
  constructor() {
    this.DEFAULT_CAPACITY = 16;
    this.THRESHOLD = 0.75;

    this.capacity = this.DEFAULT_CAPACITY;
    this.data = new Array(this.capacity);
    this.size = 0;
  }

  /**
   * Add value to the map
   * @param {string} key
   * @param {number} value
   *
   * @returns {void}
   */
  set(key, value) {
    const node = new Node(key, value);
    const index = this.getIndex(key);

    if (this.data[index]) {
      let curNode = this.data[index];

      if (curNode.key === key) {
        curNode.value = value;
        return;
      }

      while (curNode.next !== null) {
        if (curNode.next.key === key) {
          curNode.next.value = value;
          return;
        }
        curNode = curNode.next;
      }
      curNode.next = node;
    } else {
      this.data[index] = node;
    }
    this.size++;

    if (this.size > this.THRESHOLD * this.capacity) {
      this.resize();
    }
  }

  resize() {
    this.capacity *= 2;
    const updatedData = new Array(this.capacity);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentNode = this.data[i];
        while (currentNode !== null) {
          const node = new Node(currentNode.key, currentNode.value);
          const index = this.getIndex(node.key);
          if (updatedData[index]) {
            let curNode = updatedData[index];

            while (curNode.next !== null) {
              curNode = curNode.next;
            }
            curNode.next = node;
          } else {
            updatedData[index] = node;
          }
          currentNode = currentNode.next;
        }
      }
    }
    this.data = updatedData;
  }

  /**
   * Return a value stored under the key
   * @param {string} key
   *
   * @returns {number|null}
   */
  get(key) {
    let curNode = this.data[this.getIndex(key)];
    while (curNode && curNode.key !== key) {
      curNode = curNode.next;
    }
    if (curNode) {
      return curNode.value;
    }
    return null;
  }

  /**
   * Empty the map
   * @returns {void}
   */
  clear() {
    this.capacity = this.DEFAULT_CAPACITY;
    this.data = new Array(this.capacity);
    this.size = 0;
  }

  /**
   * Return map's keys
   * @returns {string[]}
   */
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentNode = this.data[i];
        while (currentNode !== null) {
          keysArr.push(currentNode.key);
          currentNode = currentNode.next;
        }
      }
    }
    return keysArr;
  }

  /**
   * Return map's values
   * @returns {number[]}
   */
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentNode = this.data[i];
        while (currentNode !== null) {
          valuesArr.push(currentNode.value);
          currentNode = currentNode.next;
        }
      }
    }
    return valuesArr;
  }

  /**
   * Return map's entries
   * @returns {(string|number)[][]}
   */
  entries() {
    const entriesArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        let currentNode = this.data[i];
        while (currentNode !== null) {
          entriesArr.push([currentNode.key, currentNode.value]);
          currentNode = currentNode.next;
        }
      }
    }
    return entriesArr;
  }

  hash(key) {
    let code = 0;
    for (let i = 0; i < key.length; i++) {
      code += key.charCodeAt(i) * 31 ** (key.length - 1 - i);
    }
    return code;
  }

  getIndex(key) {
    return this.hash(key) % this.capacity;
  }
}

const map = new HashMap();

// map.set("ac", 3);
// map.set("bb", 4);
// map.set("ca", 5);

// console.log(map.data);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

const size = 30;
// for (let i = 0; i < size; i += 1) {
//   const key = `key-i-${i}`;
//   let value = Math.trunc(Math.random() * size - i);

//   // fix case when "[0] is not equal to [-0]" :-/

//   if (Math.abs(value) === 0) {
//     value = 0;
//   }

//   map.set(key, value);
//   // console.log("key", key);
// }
for (let i = 0; i < size; i += 1) {
  const key = `key-i-${i}`;

  map.set(key, i);
}

console.log("map", map.data);
console.log(map.get("key-i-0"));
map.set("key-i-0", 121212);
console.log(map.get("key-i-0"));
// console.log(map.entries());
console.log(map.size);
