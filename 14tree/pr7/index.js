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

/**
 * @param {Vertex} root
 * @returns {number}
 */
function robbery(root) {
  function dfs(node) {
    if (node === null) {
      return [0, 0]; // [if robbed, if not robbed]
    }

    // Рекурсивно обчислюємо значення для лівого і правого піддерев
    const left = dfs(node.left);
    const right = dfs(node.right);

    // Якщо ми обкрадаємо поточний вузол, ми не можемо обкрадати його дітей
    const robThis = node.val + left[1] + right[1];

    // Якщо ми не обкрадаємо поточний вузол, ми можемо обкрадати або не обкрадати дітей
    const skipThis = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    return [robThis, skipThis];
  }

  const result = dfs(root);
  return Math.max(result[0], result[1]); // Максимальне значення з обох варіантів
}
const c = deserialize([11, 2, 13, null, 5]);

console.log(robbery(a)); // 16
console.log(robbery(b)); // 40
console.log(robbery(c)); // 18
