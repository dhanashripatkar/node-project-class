const { rejects } = require("assert")
const { fstat, readFile } = require("fs")
const { resolve } = require("path")

const readFileFunction = (path) => {
    return new Promise((resolve, rejects) => {
        readFile(path, 'utf-8', (error, result) => {
            if(error){
                rejects(error) 
            }
                resolve (result)
        })
    })
}

// readFileFunction('./index.js').then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

module.exports.name = readFileFunction