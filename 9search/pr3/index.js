/**
 * @param {number[]} ropes
 * @param {number} len
 * @param {number} k
 * @returns {boolean}
 */
function canCutKPieces(ropes, len, k) {
  let result = 0;
  for (let i = 0; i <= ropes.length - 1; i++) {
    if (len > ropes[i]) {
      continue;
    }
    const times = Math.floor(ropes[i] / len);
    result += times;
    if (result >= k) {
      return true;
    }
  }
  return false;
}

console.log(canCutKPieces([10, 5], 3, 5)); // false; // можливо отримати тільки 3 шматки довжини 3 з першого канату та 1 шматок з другого

console.log(canCutKPieces([11, 10, 9], 4, 5)); // true; // можливо отримати по 2 шматки довжиною 4 з кожного канату
