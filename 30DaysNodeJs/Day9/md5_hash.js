/*
md5 hashing algorithm : MD5 stands for message digest 5 is a widely used hash function which produces 128-bit hashes.
*/
 
 //Loading the crypto module in node.js
 var crypto = require('crypto');
 //creating hash object 
 var hash = crypto.createHash('md5');
 //passing the data to be hashed
 data = hash.update('jp', 'utf-8');
 //Creating the hash in the required format
 gen_hash= data.digest('hex');
 //Printing the output on the console
 console.log("hash : " + gen_hash);