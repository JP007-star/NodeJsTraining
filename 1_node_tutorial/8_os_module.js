const os = require('os')
const user = os.userInfo()
console.log(user);

/**  System uptime
 * */

console.log(`The System uptime is about ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log('====================================');
console.log(currentOS);
console.log('====================================');