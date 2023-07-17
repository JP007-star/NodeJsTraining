/*
reduce method is used to reduce the array to a single value. 
This method executes the provided function 
for each value of the array and stores the result in accumulator.
 Note : It does not execute on array with no values.
 */

								
arr = [ 5 , 5 , 8 , 7 , 6 ];
console.log(arr);
function mul(value ,total){
    total = value * total;
    return total;
}
var output = arr.reduce(mul);
console.log("The product of the array is : " + output);