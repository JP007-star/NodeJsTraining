const http=require('http')
const fs=require('fs');


http.createServer((req,res)=>{
   
    res.writeHead(200, {'Content-Type': 'application/pdf'});

    fs.readFile('sample.pdf',(error,data)=>{
        if(error){
            throw error
        }
        res.end(data)
    })
    console.log("server is running : 3003");
}).listen(3003)