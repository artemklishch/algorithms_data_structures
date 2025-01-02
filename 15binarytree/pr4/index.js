class TreeVertex {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
    if (vertex.value === value) {
      return true;
    }
    if (value < vertex.value) {
      return this._findRecursive(vertex.left, value);
    }
    return this._findRecursive(vertex.right, value);
  }

  insert(value) {
    this.root = this._insertRecursive(this.root, value);
  }

  _insertRecursive(vertex, value) {
    if (vertex === null) {
      return new TreeVertex(value);
    }
    if (value < vertex.value) {
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
    if (value < vertex.value) {
      vertex.left = this._deleteRecursive(vertex.left, value);
      return vertex;
    }
    if (value > vertex.value) {
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
    vertex.value = successor.value;
    return vertex;
  }

  isEmpty() {
    return this.root === null;
  }

  size() {
    return this._getSize(this.root);
  }

  _getSize(vertex) {
    let result = this.root ? 1 : 0;
    function calculateSize(vertex) {
      if (vertex === null) {
        return;
      }
      if (vertex.left !== null) {
        result++;
      }
      if (vertex.right !== null) {
        result++;
      }
      calculateSize(vertex.left);
      calculateSize(vertex.right);
    }
    calculateSize(vertex);
    return result;
  }
}

const bst = new BinarySearchTree();
const bst1 = new BinarySearchTree();

bst.insert(22);
bst.insert(18);
bst.insert(28);
bst.insert(32);
bst.insert(24);

console.log(JSON.stringify(bst, null, 1));
console.log(JSON.stringify(bst1, null, 1));
console.log(bst1.isEmpty());
console.log(bst.size());
console.log(bst1.size());

// console.log(JSON.stringify(bst, null, 1));
// console.log(bst.find(32));
// bst.delete(28);
// console.log(JSON.stringify(bst, null, 1));
// bst.delete(22);
// console.log(JSON.stringify(bst, null, 1));
