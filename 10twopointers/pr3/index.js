function longestSubarray(array, S) {
  let left = 0;
  let length = 0;
  let windowSum = 0;
  for (let right = 0; right < array.length; right++) {
    windowSum += array[right];
    while (windowSum > S) {
      windowSum -= array[left];
      left++;
    }
    if (length < right - left + 1) {
      length = right - left + 1;
    }
  }
  return length;
}

const arr1 = [21, 14, 4, 5, 13, 12, 15, 9, 5];
const arr2 = [100, 100, 100];
console.log(longestSubarray(arr1, 35)); // 4
console.log(longestSubarray(arr2, 35)); // 0
