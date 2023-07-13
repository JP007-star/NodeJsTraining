const http=require('http')
const fs=require('fs');


http.createServer((req,res)=>{
   
    res.writeHead(200, {'Content-Type': 'video/mp4'});

    fs.exists('sample.mp4',(exists)=>{
        if(exists){
            var rstream = fs.createReadStream('sample.mp4');
			rstream.pipe(res);
        }
        else{
            
            res.end("404")
        }
    })
    console.log("server is running : 3003");
}).listen(3003)