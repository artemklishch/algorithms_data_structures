class Vertex {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  find(value) {
    return this._findRecursive(this.root, value);
  }

  _findRecursive(vertex, value) {
    if (vertex === null) {
      return false;
    }
    if (vertex.val === value) {
      return true;
    }
    if (value < vertex.val) {
      return this._findRecursive(vertex.left, value);
    }
    return this._findRecursive(vertex.right, value);
  }
}

const root = new Vertex(22);
root.left = new Vertex(18);
root.right = new Vertex(28);
root.right.right = new Vertex(32);
root.right.left = new Vertex(24);

const bst = new BST();
bst.root = root;

console.log(bst.find(32));
