const os = require('os')
const user = os.userInfo()
console.log(user);

/**  System uptime
 * */

console.log(`The System uptime is about ${os.uptime()} seconds`);