// const logging = require('./log.js')

// var a = 1
// var array =  [100, 200, 300]
// var object  = {'a': {'d' : 1000}, 'b': 200, 'c': 4000}
// var b = "b"

// //callLogger('dhanashri',logger)
// add(4,5)

// function logger(a){
// // console.log(a)
// console.log(logging.name())
// }

// function callLogger(name, fun){
// fun(name)
// }

// async  function add(a, b) {
//    console.log(a + b)
//    return 7
// }
// console.log(add(4,50))
// // const addTo = () => {
//     // console.log('dhanashri')
// // }

// function addTo(){
//     console.log('dhanashri')
//     return 6
// }
// // module.exports.name = addToconst logging = require('./log.js')

// var a = 1
// var array =  [100, 200, 300]
// var object  = {'a': {'d' : 1000}, 'b': 200, 'c': 4000}
// var b = "b"

// //callLogger('dhanashri',logger)
// add(4,5)

// function logger(a){
// // console.log(a)
// console.log(logging.name())
// }

// function callLogger(name, fun){
// fun(name)
// }

// async  function add(a, b) {
//    console.log(a + b)
//    return 7
// }
// console.log(add(4,50))
// // const addTo = () => {
//     // console.log('dhanashri')
// // }

// function addTo(){
//     console.log('dhanashri')
//     return 6
// }
// // module.exports.name = addToconst logging = require('./log.js')

// var a = 1
// var array =  [100, 200, 300]
// var object  = {'a': {'d' : 1000}, 'b': 200, 'c': 4000}
// var b = "b"

// //callLogger('dhanashri',logger)
// add(4,5)

// function logger(a){
// // console.log(a)
// console.log(logging.name())
// }

// function callLogger(name, fun){
// fun(name)
// }

// async  function add(a, b) {
//    console.log(a + b)
//    return 7
// }
// console.log(add(4,50))
// // const addTo = () => {
//     // console.log('dhanashri')
// // }


const co = require('co')

var fn = co.wrap(function* (){
    const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = yield res.json()
    return data
})

//fn().then((data)=>console.log(data))

var count = 0
function *infiniteLoop(){
    while(true){
        yield count += 1
    }
}

const ifl = infiniteLoop()

for (let i = 0; i < 11; i++) {
console.log(ifl.next());
}
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());
// console.log(ifl.next());

// infiniteLoop()



// function addTo(){
//     console.log('dhanashri')
//     return 6
// }
// module.exports.name = addTo