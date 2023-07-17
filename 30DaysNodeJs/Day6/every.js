/*
every method is used to check whether a condition in fulfilled by
all the elements or not. every method returns true 
if the condition is satisfied by all the elements of the array
otherwise every method will return false.

*/


  arr = [2,4,6,8,10];
  arr1 = [2,3,4,6,8];
  function even(value){
      if( (value % 2) == 0){
          return true;
      }else{
          return false;
      }
  }
  
  var out = arr.every(even);
  var out1 = arr1.every(even);
  console.log("Output of array 1 : " + out);
  console.log("Output of array 2 :" + out1);