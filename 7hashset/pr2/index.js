class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
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

  hash(key) {
    let code = 0;

    for (let i = 0; i < key.length; i += 1) {
      code += key.charCodeAt(i) * 31 ** (key.length - 1 - i);
    }

    return code;
  }

  getIndex(key) {
    return this.hash(key) % this.capacity;
  }

  resize() {
    const entries = this.entries();

    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.size = 0;

    for (let i = 0; i < entries.length; i += 1) {
      const [key, value] = entries[i];

      this.set(key, value);
    }
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
      let currentNode = this.data[index];

      while (currentNode.next !== null && currentNode.key !== key) {
        currentNode = currentNode.next;
      }

      if (currentNode.key === key) {
        currentNode.value = value;

        return;
      }

      currentNode.next = node;
    } else {
      this.data[index] = node;
    }

    this.size += 1;

    if (this.size > this.capacity * this.THRESHOLD) {
      this.resize();
    }
  }

  /**
   * Return a value stored under the key
   * @param {string} key
   *
   * @returns {number|null}
   */
  get(key) {
    let currentNode = this.data[this.getIndex(key)];

    while (currentNode && currentNode.key !== key) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      return currentNode.value;
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
    const result = [];

    for (let i = 0; i < this.data.length; i += 1) {
      let node = this.data[i];

      if (!node) {
        continue;
      }

      while (node !== null) {
        result.push(node.key);
        node = node.next;
      }
    }

    return result;
  }

  /**
   * Return map's values
   * @returns {number[]}
   */
  values() {
    const result = [];

    for (let i = 0; i < this.data.length; i += 1) {
      let node = this.data[i];

      if (!node) {
        continue;
      }

      while (node !== null) {
        result.push(node.value);
        node = node.next;
      }
    }

    return result;
  }

  /**
   * Return map's entries
   * @returns {(string|number)[][]}
   */
  entries() {
    const result = [];

    for (let i = 0; i < this.data.length; i += 1) {
      let node = this.data[i];

      if (!node) {
        continue;
      }

      while (node !== null) {
        result.push([node.key, node.value]);
        node = node.next;
      }
    }

    return result;
  }
}

class HashSet {
  constructor() {
    this.data = new HashMap();
  }

  /**
   * Add value to the set
   * @param {number} value
   *
   * @returns {void}
   */
  add(value) {
    this.data.set(value, true);
  }

  /**
   * Check if the value is present in the set
   * @param {number} value
   *
   * @returns {boolean}
   */
  has(value) {
    return this.data.get(value) === true;
  }

  /**
   * Remove the value from the set
   * @param {number} value
   *
   * @returns {boolean}
   */
  remove(value) {
    const isValue = this.has(value);
    if (!isValue) {
      return;
    }
    const index = this.data.getIndex(value);
    const deletionValue = this.data.data[index];
    this.data.data[index] = null;
    this.data.size--;
    return deletionValue;
  }

  /**
   * Empty the set
   * @returns {void}
   */
  clear() {
    this.data.clear();
  }

  /**
   * Return set's values
   * @returns {number[]}
   */
  values() {
    return this.data.keys();
  }

  /**
   * Return set's size
   * @returns {number}
   */
  size() {
    return this.data.size;
  }
}

const set = new HashSet();

console.log(JSON.stringify(set, null, 2));
// set.add("abc1");
// set.add("abc2");
// set.add("abc3");
// set.add("abc4");
// set.add("abc5");
// set.add("abc6");
// set.add("abc7");
// set.add("abc8");
// set.add("abc9");
// set.add("abc10");
// set.add("abc11");
// set.add("abc12");
// set.add("abc13");

set.add(1);
console.log(set.size());
console.log(set.remove(1));
console.log(set.has(1));
console.log(JSON.stringify(set, null, 2));
