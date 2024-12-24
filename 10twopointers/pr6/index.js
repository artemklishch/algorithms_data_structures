/**
 * @param {string} original
 * @param {string} check
 * @returns {number[]}
 */
function findAnagramIndices(original, check) {
  if (check.length > original.length) {
    return [];
  }

  const getUniqueSymbols = (string) => {
    const uniqueLetters = {};
    for (let i = 0; i <= string.length - 1; i++) {
      if (uniqueLetters[string[i]] !== undefined) {
        uniqueLetters[string[i]]++;
      } else {
        uniqueLetters[string[i]] = 1;
      }
    }
    return uniqueLetters;
  };

  const uniqueCheckLetters = getUniqueSymbols(check);
  let left = 0;
  let right = check.length - 1;
  const result = [];
  while (right <= original.length) {
    const symbolsData = getUniqueSymbols(original.slice(left, right + 1));
    let count = 0;
    for (const key in symbolsData) {
      if (
        key in uniqueCheckLetters ||
        symbolsData[key] == uniqueCheckLetters[key]
      ) {
        count++;
      }
      if (count === Object.keys(uniqueCheckLetters).length) {
        result.push(left);
      }
    }
    left++;
    right++;
  }
  return result;
}

console.log(findAnagramIndices("cbaebabacd", "abc")); // === [0, 6] // Анаграмами "abc" є "cba", що починається в індексі 0 та "bac" в індексі 6

// console.log(findAnagramIndices("acdbacdacb", "abc")); // === [3,7]

// console.log(findAnagramIndices("abab", "ab")); // === [0, 1, 2] // Анаграмами "ab" є "ab" на індексі 0, "ba" на індексі 1 та "ab" на індексі 2.
