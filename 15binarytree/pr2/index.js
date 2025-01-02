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

  insert(value) {
    this.root = this._insertRecursive(this.root, value);
  }

  _insertRecursive(vertex, value) {
    if (vertex === null) {
      return new Vertex(value);
    }
    if (value < vertex.val) {
      vertex.left = this._insertRecursive(vertex.left, value);
    } else {
      vertex.right = this._insertRecursive(vertex.right, value);
    }
    return vertex;
  }

  delete(value) {
    this.root = this._deleteRecursive(this.root, value);
  }

  _deleteRecursive(vertex, value) {
    if (vertex === null) {
      return null;
    }
    if (value < vertex.val) {
      vertex.left = this._deleteRecursive(vertex.left, value);
      return vertex;
    }
    if (value > vertex.val) {
      vertex.right = this._deleteRecursive(vertex.right, value);
      return vertex;
    }
    if (vertex.right === null) {
      return vertex.left;
    }
    if (vertex.left === null) {
      return vertex.right;
    }

    let successorParent = vertex;
    let successor = vertex.right;
    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }
    if (successorParent !== vertex) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }
    vertex.val = successor.val;
    return vertex;
  }
}

// const root = new Vertex(22);
// root.left = new Vertex(18);
// root.right = new Vertex(28);
// root.right.right = new Vertex(32);
// root.right.left = new Vertex(24);

const bst = new BST();
// bst.root = root;

bst.insert(22);
bst.insert(18);
bst.insert(28);
bst.insert(32);
bst.insert(24);

console.log(JSON.stringify(bst, null, 1));
console.log(bst.find(32));
bst.delete(28);
console.log(JSON.stringify(bst, null, 1));
bst.delete(22);
console.log(JSON.stringify(bst, null, 1));
