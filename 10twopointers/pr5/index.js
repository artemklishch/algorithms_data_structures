/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindromValid(str) {
  //   const simmplifiedString = str.toLowerCase().replaceAll(/[^a-z]/g, "");
  //   const reversedString = simmplifiedString.split("").reverse().join("");
  //   return simmplifiedString === reversedString;
  const simmplifiedString = str.toLowerCase().replaceAll(/[^a-z]/g, "");
  let left = 0;
  let right = simmplifiedString.length - 1;
  while (left < right) {
    if (simmplifiedString[left] !== simmplifiedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromValid("Do geese see God?")); // === true

console.log(isPalindromValid("Was it a car or a cat I saw?")); // === true

console.log(isPalindromValid("A brown fox jumping over")); // === false
