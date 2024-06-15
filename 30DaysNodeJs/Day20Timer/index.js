// setImmediate
function hello () {  
    console.log("This will run Immediately");  
  }  
  console.log("It will Print the data Immediately")
  setImmediate(hello);

//   setInterval

  function hello () {  
    console.log("This will run recursively");  
  }  
  console.log("It will Print the data recursively after a delay of 2000ms again and again")
  setInterval(hello,2000);


//   setTimeout
  function hello () {  
    console.log("This will run only once");  
  }  
  console.log("It will Print the data once after the delay of 2000ms")
  setTimeout(hello,2000); 

//clearImmediate

  function hello () {  
    console.log("This will not run at all");  
  }  
  console.log("It is supposed to print the data immediately")
  var imm = setImmediate(hello);
  clearImmediate(imm);



//   clearInterval(s_int);
  function hello () {  
    console.log("This will Not Run at all");  
  }  
  console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
  var s_int = setInterval(hello,2000); 
  clearInterval(s_int);

  clearTimeout

  function hello () {  
    console.log("This will not run at all");  
  }  
  console.log("It is supposed to Print the data once after the delay of 2000ms")
  var tim = setTimeout(hello,2000);  
  clearTimeout(tim);
                      
                          
                              
                              
                          