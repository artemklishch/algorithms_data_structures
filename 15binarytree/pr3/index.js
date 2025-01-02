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

function twoSum(array, target) {
  const tree = new BST();
  for (let i = 0; i < array.length; i++) {
    if (tree.find(target - array[i])) {
      return true;
    }
    tree.insert(array[i]);
  }
  return false;
} // O(N logN), O(N h)

console.log(twoSum([23, 44, -10, 21], 65)); // true
console.log(twoSum([23, 44, -10, 21], 11)); // true
console.log(twoSum([23, 44, -10, 21], 46)); // false
