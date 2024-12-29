class Vertex {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Vertex(
  1,
  new Vertex(3, new Vertex(23), new Vertex(34)),
  new Vertex(5, null, new Vertex(9))
);

/**
 * @param {Vertex} root
 * @returns {number}
 */
function treeDepth(root) {
  function treeDepthDfs(vertex) {
    if (vertex === null) {
      return null;
    }

    return Math.max(treeDepthDfs(vertex.left), treeDepthDfs(vertex.right)) + 1;
  }

  if (root === null) {
    return 0;
  }

  return treeDepthDfs(root) - 1;
}
console.log(treeDepth(a));
