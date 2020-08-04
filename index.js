const fs = require('fs')
const now = new Date().toLocaleTimeString()
fs.writeFileSync ('node.txt',now)
result = fs.readFileSync('node.txt',{encoding:'utf-8'})
const finish = new Date().toLocaleTimeString()
console.log('now: ', now, 'result: ', result, 'finish: ', finish)
console.log(__dirname)
// console.log(__filename)

