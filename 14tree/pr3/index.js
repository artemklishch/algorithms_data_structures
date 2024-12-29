class Vertex {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Vertex(22);
const b = new Vertex(18);
const c = new Vertex(101);
const d = new Vertex(32);

a.left = b;
a.right = c;
b.right = d;

console.log(a);

function inOrderTraversal(root) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
  }
}

function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.value);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.value);
  }
}
