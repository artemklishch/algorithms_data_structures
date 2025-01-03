class TreeVertex {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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

/**
 * @param {TreeVertex} root
 * @returns {number}
 */
// function getMinimumDifference(root) {
//   let maxValue = 0;
//   function getMaxValue(r) {
//     if (r !== null) {
//       getMaxValue(r.left);
//       maxValue = r.value;
//       getMaxValue(r.right);
//     }
//   }
//   getMaxValue(root);
//   const values = [root.value, maxValue];
//   let index = 0;
//   let diff = maxValue;
//   function inOrderTraversal(r) {
//     if (r !== null) {
//       inOrderTraversal(r.left);
//       values[index] = r.value;
//       index = index === 0 ? 1 : 0;
//       const tempDiff = Math.abs(values[0] - values[1]);
//       if (tempDiff < diff) {
//         diff = tempDiff;
//       }
//       inOrderTraversal(r.right);
//     }
//   }
//   inOrderTraversal(root);
//   return diff;
// }
function getMinimumDifference(root) {
  let diff = Infinity;
  function inOrderTraversal(r, prev) {
    if (r !== null) {
      inOrderTraversal(r.left, r.value);
      const tempDiff = Math.abs(prev - r.value);
      if (tempDiff < diff) {
        diff = tempDiff;
      }
      inOrderTraversal(r.right, r.value);
    }
  }
  inOrderTraversal(root, Infinity);
  return diff;
}

const root = deserialize([4, 2, 6, 1, 3]); // 1
const root1 = deserialize([1, null, 3]); // 2
console.log(root1);

console.log(getMinimumDifference(root));
console.log(getMinimumDifference(root1));
