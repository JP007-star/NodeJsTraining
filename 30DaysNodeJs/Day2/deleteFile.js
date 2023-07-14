var fs = require('fs');
var filename = 'new_data.txt';
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});


var fs = require('fs');
var filename = 'newData.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');clear