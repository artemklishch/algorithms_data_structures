class Vertex {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Vertex(
  11,
  new Vertex(2, null, new Vertex(5)),
  new Vertex(13, null, null)
);

const b = new Vertex(
  10,
  new Vertex(2, new Vertex(7, null, null), null),
  new Vertex(33, new Vertex(6, null, null), new Vertex(5, null, null))
);

function deserialize(data) {
  if (data.length === 0) {
    return null;
  }

  const root = new Vertex(data[0]);
  const queue = [root];
  let i = 1;

  while (i < data.length) {
    const current = queue.shift();

    if (data[i] !== null) {
      current.left = new Vertex(data[i]);
      queue.push(current.left);
    }
    i++;

    if (i < data.length && data[i] !== null) {
      current.right = new Vertex(data[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

const t1 = deserialize([10, 5, 8, null, null, 3]);

/**
 * @param {Vertex} root
 * @param {number} sum
 * @returns {boolean}
 */
function hasPathSum(root, sum) {
  if (root === null) {
    return false;
  }

  function helper(root, value) {
    if (root === null && value === sum) {
      return true;
    }
    if (root === null && value !== sum) {
      return false;
    }
    const leftVal = helper(root.left, (root.left?.val || 0) + value);
    const rightVal = helper(root.right, (root.right?.val || 0) + value);
    return leftVal || rightVal;
  }
  return helper(root, root.val);
}

console.log(hasPathSum(t1, 21)); // true
