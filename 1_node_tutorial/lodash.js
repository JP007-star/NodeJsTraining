const _ = require('lodash')

const items = [1, [3, [2, [4]]]]

const newitems = _.flattenDeep(items)
console.log('====================================');
console.log("Hi this is jp");
console.log('====================================');
console.log(newitems);