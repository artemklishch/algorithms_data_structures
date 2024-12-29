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

function inOrderTraversal(root) {
  const result = [];

  function traverse(vertex) {
    if (vertex === null) {
      return;
    }
    traverse(vertex.left);
    result.push(vertex.val);
    traverse(vertex.right);
  }

  traverse(root);
  return result;
}

console.log(inOrderTraversal(a));
