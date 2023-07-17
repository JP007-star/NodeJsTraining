/*

map() function is a higher-order function that 
is used to iterate over an array and apply a given function to each element,
creating a new array with the results. 

array.map(callback(currentValue[, index[, array]])[, thisArg])

*/

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]
