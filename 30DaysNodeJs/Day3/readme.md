Introduction
Create a regular expression
Common Examples
Summary
Repository



Creating a regular expression
There are two ways for creating an regular expression :

1 .By regular expression literals : In this , the pattern to be matched is enclosed between the / (slashes) as shown below :
									
var reg = /ab*/;
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
									
								

2 .By calling the construtor function : In this, the pattern to be matched comes within the constructor function RegExp as shown below :
									
var reg = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.


1. group of letters expression
2. email expression
3. html expression
4. hexaDecimal expression
5. password expression