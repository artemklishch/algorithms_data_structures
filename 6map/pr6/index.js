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
 * @param {number[]} nums
 *
 * @returns {number}
 */
// function countIdenticalPairs(nums) {
//   const freq = {};
//   let count = 0;

//   for (const num of nums) {
//     if (freq[num]) {
//       // Якщо число вже є, додаємо кількість його появ до результату
//       count += freq[num];
//       freq[num]++;
//     } else {
//       // Інакше ініціалізуємо його в частотній таблиці
//       freq[num] = 1;
//     }
//   }

//   return count;
// }
function countIdenticalPairs(nums) {
  // не працює
  const map = new HashMap();
  let count = 0;

  for (const num of nums) {
    const val = map.get(num) || 0;
    count += val;
    map.set(num, val + 1);
  }

  return count;
}
// function countIdenticalPairs(nums) {
//   const set = [...new Set(nums)];
//   if (set.length === nums.length) {
//     return 0;
//   }
//   const pairs = [];
//   for (let i = 0; i < nums.length; i++) {
//     const isExistingNum = pairs.find((o) => o.value === nums[i]);
//     if (isExistingNum) {
//       isExistingNum.number++;
//     } else {
//       pairs.push({ value: nums[i], number: 1 });
//     }
//   }
//   const filtered = pairs.filter((p) => p.number > 1).map((p) => p.number);
//   let count = 0;
//   for (let i = 0; i < filtered.length; i++) {
//     for (let j = 1; j < filtered[i]; j++) {
//       count += filtered[i] - j;
//     }
//   }
//   return count;
// }
const arr1 = [1, 2, 3, 1, 1, 3];
const arr2 = [1, 1, 1, 1];
const arr3 = [1, 2, 3];
const arr4 = [
  33, 43, 67, 99, 93, 94, 56, 44, 37, 98, 12, 64, 3, 48, 30, 61, 63, 57, 19, 25,
  65, 45, 58, 28, 73, 62, 42, 33, 43, 67, 99, 93, 94, 56, 44, 37, 98, 12, 64, 3,
  48, 30, 61, 63, 57, 19, 25, 65, 45, 58, 28, 73, 62, 42, 33, 43, 67, 99, 93,
  94, 56, 44, 37, 98, 12, 64, 3, 48, 30, 61, 63, 57, 19, 25, 65, 45, 58, 28, 73,
  62, 42,
];

// console.log(countIdenticalPairs(arr1)); // 4;
// console.log(countIdenticalPairs(arr2)); // 6
// console.log(countIdenticalPairs(arr3)); // 0
console.log(countIdenticalPairs(arr4)); // 81
