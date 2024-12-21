function calculatePairsSums(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  } // O(n)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    } // O(n)
  } // n * O(n^2)
}

// total = O(n) + O(n^2) = O(n^2)
