var fs = require('fs');
var filename = 'data.txt';

var str = fs.readFileSync(filename).toString();

var pattern = /jp/gim;

var myarray = str.match( pattern );
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);



/*
the pattern is man and further we are using regex modifiers :
g : global scope
i : case insensitive
m : multiline match
*/