// n! = 1*2*2*3 ... n
// n! = (n - 1)! * n

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(6));

function fibonacciNumber(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(6));
