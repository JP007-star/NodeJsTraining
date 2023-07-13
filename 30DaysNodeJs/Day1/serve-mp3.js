const http=require('http')
const fs=require('fs');


http.createServer((req,res)=>{
   
    res.writeHead(200, {'Content-Type': 'audio/mp3'});

    fs.exists('sample.mp3',(exists)=>{
        if(exists){
            var rstream = fs.createReadStream('sample.mp3');
			rstream.pipe(res);
        }
        else{
            
            res.end("404")
        }
    })
    console.log("server is running : 3003");
}).listen(3003)