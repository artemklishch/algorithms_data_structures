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
 * @param {string[]} cpdomains
 *
 * @returns {string[]}
 */
// function countSubdomainVisits(cpdomains) {
//   const map = new HashMap();
//   for (let i = 0; i < cpdomains.length; i++) {
//     const valueDomainArray = cpdomains[i].split(" ");
//     const rootValue = map.get(valueDomainArray[1]);
//     if (rootValue) {
//       map.set(valueDomainArray[1], rootValue + +valueDomainArray[0]);
//     } else {
//       map.set(valueDomainArray[1], +valueDomainArray[0]);
//     }

//     const subdomainsValues = valueDomainArray[1].split(".").slice(1);
//     const firstNested = subdomainsValues.join(".");
//     const firstNestedValue = map.get(firstNested);
//     if (firstNestedValue) {
//       map.set(firstNested, firstNestedValue + +valueDomainArray[0]);
//     } else {
//       map.set(firstNested, +valueDomainArray[0]);
//     }

//     if (subdomainsValues.length > 1) {
//       const secondNestedValue = map.get(subdomainsValues[1]);
//       if (secondNestedValue) {
//         map.set(subdomainsValues[1], secondNestedValue + +valueDomainArray[0]);
//       } else {
//         map.set(subdomainsValues[1], +valueDomainArray[0]);
//       }
//     }
//   }
//   const result = [];
//   for (let i = 0; i < map.data.length; i++) {
//     if (map.data[i]) {
//       let currentNode = map.data[i];
//       while (currentNode !== null) {
//         result.push(`${currentNode.value} ${currentNode.key}`);
//         currentNode = currentNode.next;
//       }
//     }
//   }
//   return result;
// }
function countSubdomainVisits(cpdomains) {
  const map = new HashMap();
  for (let i = 0; i < cpdomains.length; i++) {
    const valueDomainArray = cpdomains[i].split(" ");
    const cpdParts = valueDomainArray[1].split(".");
    const firstCpd = valueDomainArray[1];
    const secondCpd = valueDomainArray[1].substring(firstCpd.indexOf(".") + 1);
    const subdomains = [firstCpd, secondCpd];
    if (cpdParts.length === 3) {
      subdomains.push(secondCpd.substring(secondCpd.indexOf(".") + 1));
    }
    for (let j = 0; j < subdomains.length; j++) {
      const value = map.get(subdomains[j]);
      if (value) {
        map.set(subdomains[j], value + +valueDomainArray[0]);
      } else {
        map.set(subdomains[j], +valueDomainArray[0]);
      }
    }
  }
  return map.entries().map((e) => `${e[1]} ${e[0]}`);
}

const arr1 = ["9001 blog.mate.academy"];
const arr2 = [
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
]; // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]

console.log(countSubdomainVisits(arr2));
