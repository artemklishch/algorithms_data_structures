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
        this._heap[maxIndex].key < this._heap[leftChild].key
      ) {
        maxIndex = leftChild;
      }
      if (
        rightChild < len &&
        this._heap[maxIndex].key < this._heap[rightChild].key
      ) {
        maxIndex = rightChild;
      }
      if (maxIndex === index) {
        break;
      }
      const temp = this._heap[index];
      this._heap[index] = this._heap[maxIndex];
      this._heap[maxIndex] = temp;

      index = maxIndex;
    }
  }

  _bubbleUp() {
    let index = this._heap.length - 1;
    while (index > 0) {
      const parentIndex = this._getParentIndex(index);
      if (this._heap[parentIndex].key > this._heap[index].key) {
        break;
      }
      const temp = this._heap[parentIndex];
      this._heap[parentIndex] = this._heap[index];
      this._heap[index] = temp;
      index = parentIndex;
    }
  }

  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
}

const heap = new Heap();

heap.push(200, "");
heap.push(150, "");
heap.push(70, "");
heap.push(110, "");
heap.push(310, "");

while (!heap.isEmpty()) {
  console.log(heap.pop());
}

console.log(heap);
