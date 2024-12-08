/**
 * @param { Set } A
 * @param { Set } B
 *
 * @returns { Set }
 */
function isSubsetOf(A, B) {
  return [...A].every((v) => B.has(v));
}

const A = new Set([44, 45, 1, 73, 132, 323, 0]);
const B = new Set([0, 45, 1, 76, 34, 23, 232]);

console.log(isSubsetOf(A, B));

/**
 * @param { Set } A
 * @param { Set } B
 *
 * @returns { Set }
 */
function areSetsEqual(A, B) {
  return [...A].every((v) => B.has(v)) && [...B].every((v) => A.has(v));
}

/**
 * @param { Set } A
 * @param { Set } B
 *
 * @returns { Set }
 */
function setSymmetricDifference(A, B) {
  // const subset1 = A.difference(B);
  // const subset2 = B.difference(A);
  // return new Set([...subset1, ...subset2]);
  const set = new Set();
  A.forEach((v) => {
    if (!B.has(v)) {
      set.add(v);
    }
  });
  B.forEach((v) => {
    if (!A.has(v)) {
      set.add(v);
    }
  });
  return set;
}

const A1 = new Set([7, 8, 9, 10]);
const B1 = new Set([9, 10, 11, 12]);
console.log(setSymmetricDifference(A1, B1)); // 7, 8, 11, 12

/**
 * @param { Set } A
 * @param { Set } B
 *
 * @returns { Set }
 */
function setUnion(A, B) {
  // return A.union(B);
  const set = new Set();
  A.forEach((v) => set.add(v));
  B.forEach((v) => set.add(v));
  return set;
}

const A2 = new Set([1, 2, 3]);
const B2 = new Set([3, 4, 5]);
console.log(setUnion(A2, B2)); // 1,2,3,4,5
