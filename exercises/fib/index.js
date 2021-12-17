// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   if(n < 2){
//     return n;
//   }
//   return fib(n-1) + fib(n-2);
// }

function memoize(fn) {
  const cache = {}; // record of all previous calls and respective results
  return function(...args) { // when we call memoize, we return a function
    if(cache[args]) {
      return cache[args]; // check to determine whether result exists already in the cache
    }
    const result = fn.apply(this, args) // we're calling slowFib and passing an array of args
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if(n < 2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}

// fib is an anonymous function
const fib = memoize(slowFib);

module.exports = fib;
