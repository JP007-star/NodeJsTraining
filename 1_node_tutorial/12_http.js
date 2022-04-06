const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') res.end("Hi this is Jp")
    if (req.url === '/about') res.end("Hi this is  about Jp")
    res.end(`<h1 style=text-align:center;> Oops!!! </h1>`)


})

server.listen(5000)