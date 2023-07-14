var fs=require('fs')
var newData="\n add these new data"

fs.appendFile('content.txt' , newData ,(err,data)=>{
    if(err)
       throw err
    console.log("data is appended from async");  
})


//file append operation in nodejs
var fs = require('fs');
var content = "\n We are Appending this file synchronously using node.js";
fs.appendFileSync('message.txt', content);
console.log("File Appended Successfully");