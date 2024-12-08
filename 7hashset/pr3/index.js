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

      while (curNode.next !== null) {
        curNode = curNode.next;
      }

      if (curNode.key === key) {
        curNode.value = value;
        return;
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

/**
 * @param { String[][] } table
 *
 * @returns { String[][] }
 */
function removeDuplicatedValues(table) {
  // const set = new HashSet();
  // const result = new Array(table.length);
  // for (let i = 0; i < table[table.length - 1].length; i++) {
  //   set.add(table[table.length - 1][i]);
  // }
  // for (let i = table.length - 1; i >= 0; i--) {
  //   if (i === table.length - 1) {
  //     result[i] = set.values();
  //   } else {
  //     const subArray = [];
  //     for (let j = 0; j < table[i].length; j++) {
  //       if (!set.has(table[i][j])) {
  //         set.add(table[i][j]);
  //         subArray.push(table[i][j]);
  //       }
  //     }
  //     result[i] = subArray;

  // }
  // return result;
  const set = new HashSet();
  const result = new Array(table.length);
  for (let i = table.length - 1; i >= 0; i--) {
    const subArray = [];
    for (let j = 0; j < table[i].length; j++) {
      if (!set.has(table[i][j])) {
        set.add(table[i][j]);
        subArray.push(table[i][j]);
      }
    }
    result[i] = subArray;
  }
  return result;
}

// function removeDuplicatedValues(table) {
//   const result = [];

//   for (let i = table.length - 1; i >= 0; i--) {
//     if (i === table.length - 1) {
//       const set = new HashSet();

//       for (let j = 0; j < table[i].length; j++) {
//         set.add(table[i][j]);
//       }
//       result[i] = set;
//     } else {
//       const set = new HashSet();

//       for (let j = 0; j < table[i].length; j++) {
//         const prevSetHas = result[i + 1].has(table[i][j]);

//         if (!prevSetHas) {
//           set.add(table[i][j]);
//         }
//       }
//       result[i] = set;
//     }
//   }

//   return result.map((s) => s.values());
// }

const arr1 = [
  ["C", "F", "G"],
  ["A", "B", "C"],
  ["A", "B", "D"],
];
// [
//   ["F", "G"],
//   ["C"],
//   ["A", "B", "D"],
// ]

const arr2 = [["A"], ["A"], ["A"]];
// [
//   [],
//   [],
//   ["A"],
// ]

const arr3 = [
  ["F", "X", "T", "D"],
  ["E", "B", "Q"],
  [],
  [],
  ["H", "Q", "T", "A"],
  ["N", "T"],
  ["P"],
  ["B", "W", "M", "V", "I", "K", "S"],
  ["C", "O", "R", "Y", "D", "U"],
];
// [
//   ['F', 'X'],
//   ['E'],
//   [],
//   [],
//   ['H', 'Q', 'A'],
//   ['N', 'T'],
//   ['P'],
//   ['B', 'W', 'M', 'V', 'I', 'K', 'S'],
//   ['C', 'O', 'R', 'Y', 'D', 'U'],
// ]
console.log(removeDuplicatedValues(arr3));
