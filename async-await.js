const { getEnvironmentData } = require('worker_threads')
const promise = require('./promise-topic.js')
const {readFile, writeFile} = require('fs').promises

const readCustomFile =  async () => {
    const first = await readFile('./index.js', 'utf-8')
    const second = await readFile('./log.js', 'utf-8')
    await writeFile ('text5.js', first+second)
}

//readCustomFile()

Promise.all([promise.name("./index.js"), promise.name("./log.js")]).then((result) => {
    console.log(result[0], result[1])
}).catch ((error) => {
console.log(error)
})