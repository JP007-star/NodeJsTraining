const http=require('http')

const host="127.0.0.1"
const port=3002

const user ={
    firstName:"Ram",
    lastName:"Ragav",
    age:23
}
const server=http.createServer((request,response) =>{
    response.writeHead(200,{'Content-Type': 'application/json'})
    response.write(JSON.stringify(user))
    response.end("sever working success")
})


server.listen(port,host,(error)=>{
    if(error){
       return console.log("Error :: ",error); 
    }
    console.log('server is listening on ' + host + ':'+ port);
})