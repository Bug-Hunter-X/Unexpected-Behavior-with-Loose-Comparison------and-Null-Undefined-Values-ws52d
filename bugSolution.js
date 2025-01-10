function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    throw new Error('Arguments cannot be null or undefined'); // Throw an error for better error handling
  }
  return a + b;
}

console.log(foo(5, 5)); // Output: 10

try {
  console.log(foo(null, 5)); // Throws an error
} catch (error) {
  console.error(error); //Handle the error appropriately
}

try {
  console.log(foo(5, null)); // Throws an error
} catch (error) {
  console.error(error); //Handle the error appropriately
}
