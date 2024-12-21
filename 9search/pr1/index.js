function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

const arr1 = [-10, -7, -4, 0, 2, 8, 11, 123];
console.log(binarySearch(arr1, -4));
