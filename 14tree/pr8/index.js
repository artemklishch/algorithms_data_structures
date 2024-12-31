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

const t1 = deserialize([8, 2, 13, -3, 5]); // 11
const t2 = deserialize([8, 7, null, 6, null, 5]); // 3
const t3 = deserialize([8, null, 7, null, 6, null, 5]); // 3
const t4 = deserialize([10, 5, 15, 2, 7, 12, 20]); // 10
const t5 = deserialize([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]); // 7
const t6 = deserialize([1, 2, 3, 4, null, null, 5, null, 6, null, 7]); // 6

/**
 * @param {Vertex} root
 * @returns {number}
 */
function maxAncestorDiff(root) {
  // Допоміжна функція
  function helper(node, minVal, maxVal) {
    if (node === null) {
      return maxVal - minVal; // Різниця між максимальним і мінімальним
    }

    // Оновлюємо мінімальне та максимальне значення
    minVal = Math.min(minVal, node.val);
    maxVal = Math.max(maxVal, node.val);

    // Рекурсивно обходимо ліве та праве піддерева
    const leftDiff = helper(node.left, minVal, maxVal);
    const rightDiff = helper(node.right, minVal, maxVal);

    // Повертаємо максимальну різницю
    return Math.max(leftDiff, rightDiff);
  }

  // Запускаємо рекурсію
  return helper(root, root.val, root.val);
}

console.log(JSON.stringify(t5, null, 1));
console.log(maxAncestorDiff(t5));
