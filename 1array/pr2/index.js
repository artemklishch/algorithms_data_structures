function reverseArray(array) {
  let lastIndex = array.length - 1;

  for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    const temp = array[i];

    array[i] = array[lastIndex];
    array[lastIndex] = temp;
    lastIndex--;
  }
}

const array = [1, 2];
reverseArray(array);
console.log(array);

// function xorOperation(n, start) {
//   if (n <= 1000 && start <= 1000) {
//     const nums = [];
//     let num = start;
//     for (let i = 0; i < n; i++) {
//       nums.push(num);
//       num += 2;
//     }
//     let result = nums[0];
//     for (let i = 1; i <= nums.length - 1; i++) {
//         result ^= nums[i];
//     }
//     return result;
//   }
// }

console.log("\n");
function xorOperation(n, start) {
  if (n <= 1000 && start <= 1000) {
    let result = 0;
    let num = start;
    for (let i = 0; i < n; i++) {
      result ^= num;
      num += 2;
    }
    return result;
  }
}

let n1 = 3 ^ 5;
let n2 = n1 ^ 7;
let n3 = n2 ^ 9;
console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(4, 3)); // 8

console.log("\n");

// function sumZero(n) {
//   let arr = [];
//   if (n <= 1000) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//       if (i + 1 !== n) {
//         const randomNumber = Math.round(
//           Math.random() * 1000 * (i % 2 ? -1 : 1)
//         );
//         arr.push(randomNumber);
//         sum += randomNumber;
//       } else {
//         const lastValue = sum > 0 ? -sum : sum;
//         arr.push(lastValue);
//       }
//     }
//     if (arr.length !== [...new Set(arr)].length) {
//       arr = sumZero(n);
//     }
//   }

//   return arr;
// }

function sumZero(n) {
  const arr = [];
  let index = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    arr[index++] = -i; // в момент присвоєння тут значення index все ще дорівнює 0 - воно дорівнює 1 на наступному рядку
    arr[index++] = i;
  }
  if (n % 2 !== 0) {
    arr.push(0);
  }
  console.log(`"arr`, arr);
  return arr;
}

const value = sumZero(5);
const res = value.reduce((acc, v) => acc + v, 0);
// console.log(sumZero(5));
console.log(res);
