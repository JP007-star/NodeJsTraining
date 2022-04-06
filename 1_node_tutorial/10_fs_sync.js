const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')

console.log('====================================');
console.log(first);
console.log('====================================');

writeFileSync('./content/result.txt',
    `Here is the result :${first}`, { flag: 'a' }
)
console.log('done with task');
console.log('starting new task');