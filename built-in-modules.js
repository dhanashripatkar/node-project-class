const os = require('os')
const path = require('path')
const fs = require('fs')

console.log(os.uptime())
console.log(os.userInfo())
console.log(os.userInfo().username)
console.log(path.join("index.js"))
console.log(__dirname)
const pathName = path.join(__dirname, 'index.js')
console.log(__filename)
const readFile = fs.readFile('./index.js', 'utf-8', (err, result) => {
const first = result
fs.readFile('./log.js', 'utf-8', (err, result) => {
    const second = result
      fs.writeFile('./text4.js', first+second , (err , result) =>{
        
      })
   })
})
/*console.log(readFile)
const readFile2 = fs.readFileSync('./log.js', 'utf-8')
console.log(readFile2)
const writefile = fs.writeFileSync('./text3.js', readFile+readFile2, {flag: 'a'})*/





