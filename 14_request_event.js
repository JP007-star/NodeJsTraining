const http = require('http')
const server = http.createServer()

// const server = http.createServer((req, res) => {
//     res.end(`<h1 style=text-align:center;> Oops!!! </h1>`)
// })
server.on('response', (req, res) => {
    res.end("Welcome")
})
server.listen(5000)