//Loading the crypto module in node.js
var crypto = require('crypto');
//creating hash object 
var hash = crypto.createHash('whirlpool');
//passing the data to be hashed
data = hash.update('nodejsera', 'utf-8');
//Creating the hash in the required format
gen_hash= data.digest('hex');
//Printing the output on the console
console.log("hash : " + gen_hash);
										