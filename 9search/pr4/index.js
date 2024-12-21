/**
 * @param {number[]} ropes
 * @param {number} k
 * @returns {number}
 */
function chooseMaxPieceLen(ropes, k) {
  function canCut(len) {
    let count = 0;
    for (let rope of ropes) {
      count += Math.floor(rope / len);
      if (count >= k) return true;
    }
    return false;
  }

  let minLen = 1;
  let maxLen = Math.max(...ropes);
  let result = 0;

  while (minLen <= maxLen) {
    const mid = Math.floor((minLen + maxLen) / 2);
    if (canCut(mid)) {
      result = mid;
      minLen = mid + 1;
    } else {
      maxLen = mid - 1;
    }
  }

  return result;
}
//
console.log(chooseMaxPieceLen([5, 5, 5], 3)); // === 5 // максильна довжина шматка 5,з кожного канату отримаємо по одному шматку

console.log(chooseMaxPieceLen([10, 15, 20], 5)); //  === 7 // максимальна можлива довжина 6 [10 -> 1 шматок, 15 -> 2 шматки, 20 -> 3 шматки]
