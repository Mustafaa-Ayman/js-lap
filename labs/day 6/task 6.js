function onlyTwoParameters(param1, param2) {
  if (arguments.length !== 2) {
    throw new Error("Exactly 2 parameters are required.");
  }

  console.log("Parameters accepted:", param1, param2);
}

try {
  onlyTwoParameters(10, 20);
//   onlyTwoParameters(30);    
//   onlyTwoParameters(40, 50, 60); 
} catch (error) {
  console.error("Error:", error.message);
}
