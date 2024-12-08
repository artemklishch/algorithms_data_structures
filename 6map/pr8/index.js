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
          const index = this.getIndex(currentNode.key);
          const node = new Node(currentNode.key, currentNode.value);

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
    while (curNode && curNode?.key !== key) {
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

/**
 * @param {number[]} arr
 *
 * @returns {boolean}
 */
function hasUniqueOccurrences(arr) {
  const map = new HashMap();
  for (let i = 0; i < arr.length; i++) {
    const isExists = map.get(arr[i]);
    if (isExists) {
      map.set(arr[i], isExists + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  const unique = [...new Set(map.values())];
  return unique.length === map.size;
}

const arr1 = [1, 2, 2, 1, 1, 3];
const arr2 = [1, 2];

console.log(hasUniqueOccurrences(arr2));
