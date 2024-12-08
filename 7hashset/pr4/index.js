// function setIntersection(A, B) {
//   return A.intersection(B);
// }

function setIntersection(A, B) {
  const set = new Set();
  if (A.size >= B.size) {
    A.forEach((v) => {
      if (B.has(v)) {
        set.add(v);
      }
    });
  } else {
    B.forEach((v) => {
      if (A.has(v)) {
        set.add(v);
      }
    });
  }
  return set;
}

const A = new Set();
A.add(1);
A.add(2);

const B = new Set();
B.add(1);
B.add(8);

console.log(setIntersection(A, B));
