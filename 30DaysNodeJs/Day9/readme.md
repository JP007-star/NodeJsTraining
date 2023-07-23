#Crypto Module

SHA256 HMAC: 
It is same as hasing the input with SHA256 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key 

md5 hashing algorithm : MD5 stands for message digest 5 is a widely used hash function which produces 128-bit hashes.

Whirlpool hashing algorithm : This hashing algorithm takes input of any length less than 2256 bits and outputs a 512-bit hash.


SHA1 hashing algorithm : Secure Hash Algorithm 1 is a cryptographic hash function which generates a hash value which is typically rendered as a hexadecimal number of exactly 40 digits long. It produces a 160-bit hash value which is known as message digest.

SHA224 hashing algorithm : Secure Hash Algorithm 224 comes under SHA2 and it is a cryptographic hash function which is used to generate hash values.It produces a 224-bit hash value which is known as message digest.

SHA256 hashing algorithm : Secure Hash Algorithm 256 comes under SHA2 and it is a cryptographic hash function which is used to generate hash values.It produces a 256-bit hash value which is known as message digest.

SHA384 hashing algorithm : Secure Hash Algorithm 384 comes under SHA2 and it is a cryptographic hash function which is used to generate hash values.It produces a 384-bit hash value which is known as message digest.

SHA512 hashing algorithm : Secure Hash Algorithm 512 comes under SHA2 and it is a cryptographic hash function which is used to generate hash values.It produces a 512-bit hash value which is known as message digest.

ripemd-160 hashing algorithm : RIPEMD (RACE Integrity Primitives Evaluation Message Digest) 160 is an improved version of ripemd and it usually generates a 40 digit hexadecimal number.


Perform Hashing on a file
Hashing a file : We are hashing the contents of a file using node.js streams , node.js filesystem and SHA256 cryprographic hashing algorithm.


Problems with hashing
One of the biggest problems with hashing includes the rainbow table which is a precomputed table for reversing cryptographic hash functions.

What is hmac ?
HMAC ( keyed-hash message authentication code ) is a kind of MAC ( Message authentication code ) which involves performing the hash functions using a secret cryptographic key.
Just like hash, in HMAC also every generated hash using hashing algorithms

SHA256 HMAC: It is same as hasing the input with SHA256 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :

sha512 HMAC : It is same as hasing the input with SHA512 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :

md5 HMAC : It is same as hasing the input with md5 hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :

Whirlpool hmac : It is same as hasing the input with Whirlpool hashing algorithm as explained above, the only difference is it involves hashing with the help of a secret key as shown in example below :

HMAC on a FILE
Hashing a file using HMAC : We are hashing the contents of a file using node.js streams , node.js filesystem and MD5 cryprographic hashing algorithm.