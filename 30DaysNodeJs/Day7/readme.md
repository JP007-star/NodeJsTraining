npm install npm@latest -g

Create package.json : We can create package.json file using the npm init command. The snippet is given below :

npm init --yes


npm install
											
It will install all the dependencies mentioned in package.json file.


Locally (Local installation ) : We install packages locally when we need to require them in our application for example express, gannit , etc. The syntax for downloading a package locally is : 

npm install < package_name >

Globally (Global installation) : We install packages globally when we want to use it as a command line tool or run it in the background for example forever, grunt-cli, etc. The syntax for global download of packages is : 


npm install -g < package_name > 



You Know the exact version : If you know the exact version of the npm package you want to install , then it can be downloaded using the package_name with @ character. The Syntax is npm install package_name@version . The snippet is given below :
											
>npm install express@4.15.1


You don't Know the exact version : If you don't know the exact version of the npm package you want to install , then it can be downloaded using the semantic range npm provides. Suppose you want to install the latest version of the 4th major release say , 4.1.15 then you can download it in the following way : The Syntax is npm install package_name@^major_version.0.0 . The snippet is given below :
											
>npm install express@^4.0.0

Updating local packages : We should keep our packages updated in order to keep track of the changes that have been made to the code upstream of the packages so that we can mould our code as per the latest version. The syntax for Updating local packages is : npm update .
Example is given below :
											
>npm update


npm outdated 
command. If there is no output on the console , then it means all the packages are updated.



Updating global packages : The Syntax for updating global packages is npm install -g < package_name > The snippet is given below :
											
>npm install -g forever


npm update -g	


npm uninstall gannit

>npm uninstall --save-dev gannit

npm uninstall -g forever