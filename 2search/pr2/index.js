function searchInsert(nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > target) {
      return i;
    }
  }

  return 0;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 5 має індекс 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 2 було б вставлене з індексом 1
console.log(searchInsert([1, 3, 5, 6], 0)); // 0 був б вставлений з індексом 0
console.log(searchInsert([1, 5, 5, 5, 7], 6)); // 6 було б вставлене з індексом 4
console.log(searchInsert([1], 3)); // 1 було б вставлене з індексом 1

console.log("\n");

// function countNegatives(grid) {
//   let negativeNumbers = 0;

//   if (1 <= grid.length <= 2000) {
//     for (let i = 0; i <= grid.length - 1; i++) {
//       for (let j = grid[i].length - 1; j >= 0; j--) {
//         if (-100 <= grid[i][j] <= 100 && grid[i][j] < 0) {
//           negativeNumbers++;
//         } else {
//           break;
//         }
//       }
//     }
//   }

//   return negativeNumbers;
// }
function countNegatives(grid) {
  let negativeNumbers = 0;

  if (grid.length >= 1 && grid.length <= 2000) {
    for (let i = 0; i <= grid.length - 1; i++) {
      for (let j = grid[i].length - 1; j >= 0; j--) {
        if (grid[i][j] >= -100 && grid[i][j] <= 100 && grid[i][j] < 0) {
          negativeNumbers++;
        } else {
          break;
        }
      }
    }
  }

  return negativeNumbers;
}
const m1 = [
  [1, -1],
  [-1, -1],
];
const m2 = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(m1));
console.log(countNegatives(m2));

console.log("\n");

function peakIndexInMountainArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
}

const arr1 = [0, 1, 0]; // 1
const arr2 = [0, 2, 1, 0]; // 1
const arr3 = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]; // 2

console.log(peakIndexInMountainArray(arr1));
console.log(peakIndexInMountainArray(arr2));
console.log(peakIndexInMountainArray(arr3));

console.log("\n");

function sqrt(x) {
  if (x < 2) {
    return x;
  }
  if (x >= 0 && x <= 2 ** 31 - 1) {
    let result = 0;
    let left = 1;
    let right = x;
    while (left <= right) {
      const mid = left + Math.round((right - left) / 2);
      if (mid <= x / mid) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
}
console.log(sqrt(2147483647)); // 46340
console.log(sqrt(4)); // 2
