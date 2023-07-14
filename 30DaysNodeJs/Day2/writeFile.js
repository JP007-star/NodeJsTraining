//Writing a File Asynchronously using nodejs
var fs =  require('fs');
var content= "this is the content in the file";
fs.writeFile('message.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved! from async');
});
	
var fs = require('fs');

var content = "We are writing this file synchronously using node.js";

fs.writeFileSync('content.txt', content);
console.log("File Written Successfully from sync");
									