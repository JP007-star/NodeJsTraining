const http=require('http')
const fs=require('fs');
const { log } = require('console');



http.createServer((req,res)=>{
   
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('index.html',(error,data)=>{
        if(error){
            throw error
        }
        res.end(data)
    })
    console.log("server is running : 3003");
}).listen(3003)