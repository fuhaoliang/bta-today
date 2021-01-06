//b.js
var message = require('./a').message

exports.count = 5

setTimeout(()=>{
  console.info('b-->message', message)
})