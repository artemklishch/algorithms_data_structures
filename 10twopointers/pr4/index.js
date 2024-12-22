/**
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left, right];
    }

    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
}

console.log(twoSumSorted([2, 3, 4, 5, 8, 11, 18], 8)); // === [1, 3]
