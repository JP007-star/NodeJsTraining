/*
slice method is used to extract a section of an array and 
returns a new array. Slice method take two arguments i.e start and end. 
If both elements are omitted then it will slice the whole array. 
Syntax is : slice(start,end)
start : This is an integer which specifies where to start. The default value is index 0 . If omitted like this :: slice(,end) it will use the default value as start. We can also start from the end by using negative values . This is optional.
end : This is an integer value which specifies where to end (last index excluded). If omitted like this :: slice(start,) it will slice upto the last element. We can use negative values to select from the end. This is optional.
Note : It will not change the original array.
*/


arr = [ 5 , 2 , 8 , 5 , 6 ];
arr1 = ['a','b','c','d'];
console.log(arr);
console.log(arr1);
var str = arr.slice(2,4);
var str1 = arr1.slice(-2,-1);
console.log(str);
console.log(str1);	