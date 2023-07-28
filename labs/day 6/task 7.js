
function addNumbers() {

  if (arguments.length === 0) {
    throw new Error("Please provide at least one number as a parameter.");
  }

  
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new Error("Invalid parameter type. Only numbers are allowed.");
    }
  }


  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

try {
  console.log(addNumbers(5, 10, 15)); 
//   console.log(addNumbers(1, 2, 3, 4, 5));
//   console.log(addNumbers(100)); /
//   console.log(addNumbers());
//   console.log(addNumbers(10, "hello", 20)); 
} catch (error) {
  console.error("Error:", error.message);
}
