const { readFile, writeFile } = require('fs')


console.log('start');
readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const first = data
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data
        writeFile('./content/result_async.txt',
            `Here is the result :${first}  ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with task');
            }
        )

    })

})
console.log('starting with new task');