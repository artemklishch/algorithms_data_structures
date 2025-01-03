class HeapElement {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Heap {
  constructor() {
    this._heap = [];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  peek() {
    return this._heap[0];
  }

  push(key, value) {
    this._heap.push(new HeapElement(key, value));
    this._bubbleUp();
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const top = this._heap[0];

    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap.pop();
    this._bubbleDown();

    return top;
  }

  _bubbleDown() {
    let index = 0;
    let maxIndex = 0;
    let len = this._heap.length;
    while (index < len) {
      const leftChild = 2 * index + 1;
      const rightChild = leftChild + 1;
      if (
        leftChild < len &&
        this._heap[maxIndex].key > this._heap[leftChild].key
      ) {
        maxIndex = leftChild;
      }
      if (
        rightChild < len &&
        this._heap[maxIndex].key > this._heap[rightChild].key
      ) {
        maxIndex = rightChild;
      }
      if (maxIndex === index) {
        break;
      }
      [this._heap[maxIndex], this._heap[index]] = [
        this._heap[index],
        this._heap[maxIndex],
      ];
      index = maxIndex;
    }
  }

  _bubbleUp() {
    let index = this._heap.length - 1;
    while (index > 0) {
      const parentIndex = this._getParentIndex(index);
      if (this._heap[parentIndex].key < this._heap[index].key) {
        break;
      }
      [this._heap[parentIndex], this._heap[index]] = [
        this._heap[index],
        this._heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
}

function mergeKSortedArrays(arrays) {
  const minElementsFromArrays = new Heap();
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      minElementsFromArrays.push(arrays[i][0], [i, 0]);
    }
  }
  const result = [];
  while (!minElementsFromArrays.isEmpty()) {
    const top = minElementsFromArrays.pop();
    result.push(top.key);

    const listIndex = top.value[0];
    const elementIndex = top.value[1];

    if (arrays[listIndex].length > elementIndex + 1) {
      minElementsFromArrays.push(arrays[listIndex][elementIndex + 1], [
        listIndex,
        elementIndex + 1,
      ]);
    }
  }
  return result;
}

console.log(
  mergeKSortedArrays([
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11],
  ])
);
