function generateData() {}

let lenear = 0;
let binary = 0;
let interpolation = 0;

const arr = Array(1000000)
  .fill(null)
  .map((_, index) => index);

function lenearSearch(array, target) {
  for (let i = 0; i <= array.length - 1; i++) {
    lenear++;
    if (array[i] === target) {
      return array[i];
    }
  }
  return -1;
}

function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    binary++;
    const mid = Math.round((max + min) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}

function interpolationSearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    interpolation++;
    const mid = Math.round(
      min + ((max - min) / (array[max] - array[min])) * (target - array[min]) // формула для інтерполяційного пошуку
    );
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}

console.log(lenearSearch(arr, 99999), { lenear }); // O(n)
console.log(binarySearch(arr, 99999), { binary }); // O(log n), тільки для відсортованих массивів
console.log(interpolationSearch(arr, 99999), { interpolation }); // O(log(log n)), тільки для відсортованих массивів та якщо дані розподілені рівномірно, наприклад, збільшуються з постійною закономірністю
