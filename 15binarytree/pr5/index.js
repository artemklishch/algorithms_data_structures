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

function deserialize(data) {
  if (data.length === 0) {
    return null;
  }

  const root = new TreeVertex(data[0]);
  const queue = [root];
  let i = 1;

  while (i < data.length) {
    const current = queue.shift();

    if (data[i] !== null) {
      current.left = new TreeVertex(data[i]);
      queue.push(current.left);
    }
    i++;

    if (i < data.length && data[i] !== null) {
      current.right = new TreeVertex(data[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// console.log(JSON.stringify(bst, null, 1));

function isValidBST(root) {
  if (root === null) {
    return true;
  }

  let isValid = true;
  const isInvalidRootValue =
    (root.left && root.value < root.left.value) ||
    (root.right && root.value > root.right.value);
  if (isInvalidRootValue) {
    return false;
  }

  function checkValidity(r, isRight) {
    if (!isValid || r === null) {
      return;
    }
    const isInvalidValue =
      (r.left && r.value < r.left.value) ||
      (r.right && r.value > r.right.value) ||
      (isRight && r.value < root.value);
    if (isInvalidValue) {
      isValid = false;
      return;
    }
    checkValidity(r.left, isRight);
    checkValidity(r.right, isRight);
  }
  checkValidity(root.left, false);
  checkValidity(root.right, true);
  return isValid;
}

const root = deserialize([10, 5, 15, null, null, 6, 20]);
console.log(root);

console.log(isValidBST(bst.root));
