const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })

//default size 64 kb
//highwatermark ---> to control size
stream.on('data', (result) => {
    console.log(result);
})