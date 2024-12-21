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

function lenearSearch(array, target) {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === target) {
      return array[i];
    }
  }
  return -1;
}

function benchmark(searchFunction) {
  // const array =
  const target = -979981273;

  const start = new Date().getTime();
  console.time("10k searches");
  let index = -1;
  for (let i = 0; i < 10000; i++) {
    // index = searchFunction(array, target);
  }
  const end = new Date().getTime();
  console.log(`Index: ${index}`);
  console.timeEnd("10k searches");
}

// k = log2N - k (логарифм) - степінь, до якої потрібно піднести число 2, щоб отримати число N
// логарифм 2 - 1, тому що 2 ^ 1 = 2
// логарифм 16 - 4, тому що 2 ^ 4 = 16
// логарифм 1024 - 10, тому що 2 ^ 10 = 1024
// логарифм 1048576 - 20, тому що 2 ^ 20 = 1048576
// логарифм 1073741824 - 30, тому що 2 ^ 30 = 1073741824
