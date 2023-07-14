//Reading a File Asynchronously using nodejs
var fs=require('fs');

fs.readFile('sample.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content from async :  " + data);
});

var fs = require('fs');
var filename = 'sample.txt'; //Name of the file to be read
var content = fs.readFileSync(filename);
console.log('Content from sync: ' + content);