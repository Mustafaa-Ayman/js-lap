//  using a for loop
function reverseUsingForLoop() {
  const argsArray = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
    argsArray.push(arguments[i]);
  }
  return argsArray;
}

// Test the function
// console.log(reverseUsingForLoop(1, 2, 3, 4, 5)); 
// console.log(reverseUsingForLoop("a", "b", "c")); 


// using the concat method
function reverseUsingConcat() {
  return Array.prototype.concat.apply([], arguments).reverse();
}

// Test the function
console.log(reverseUsingConcat(1, 2, 3, 4, 5)); 
console.log(reverseUsingConcat("a", "b", "c")); 