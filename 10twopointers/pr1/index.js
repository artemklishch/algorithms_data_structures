function twoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] === target) {
      return [left, right];
    }

    if (array[left] + array[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
}

const arr1 = [1, 3, 8, 18, 54, 66, 67];
const arr2 = [1, 2, 3, 4, 10, 20, 44];
console.log(twoSum(arr2, 24));
