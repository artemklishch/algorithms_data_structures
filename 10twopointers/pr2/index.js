function largestSubarraySum(array, k) {
  let left = 0;
  let right = k - 1;

  let currentSum = 0;
  for (let i = 0; i <= right; i++) {
    currentSum += array[i];
  }
  let maxSum = currentSum;
  while (right + 1 < array.length) {
    currentSum -= array[left];
    currentSum += array[right + 1];
    left++;
    right++;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

const arr1 = [12, 9, 22, 18, 19, 7, 33, 1, 1, 14];
console.log(largestSubarraySum(arr1, 4)); // 77
