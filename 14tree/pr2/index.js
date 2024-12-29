class Vertex {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeDepthDfs(vertex) {
  if (vertex === null) {
    return null;
  }
  // depth(v) = max(depth(v.left), depth(v.right))
  return Math.max(treeDepthDfs(vertex.left), treeDepthDfs(vertex.right)) + 1;
}

function treeDepth(vertex) {
  if (vertex === null) {
    return 0;
  }
  return treeDepthDfs(vertex) - 1;
}

// max(vertex) = Max(vertex.value, max(vertex.left), max(vertex.right))

function treeMaxDfs(vertex) {
  let maxValue = vertex.value;
  if (vertex.left !== null) {
    const leftMax = treeMaxDfs(vertex.left);
    if (maxValue < leftMax) {
      maxValue = leftMax;
    }
  }
  if (vertex.right !== null) {
    const rightMax = treeMaxDfs(vertex.right);
    if (maxValue < rightMax) {
      maxValue = rightMax;
    }
  }
  return maxValue;
}

const a = new Vertex(22);
const b = new Vertex(18);
const c = new Vertex(101);
const d = new Vertex(32);

a.left = b;
a.right = c;
b.right = d;

console.log(a);

console.log(treeDepthDfs(a));
console.log(treeDepth(a));
console.log(treeDepth(null));
console.log(treeMaxDfs(a));
