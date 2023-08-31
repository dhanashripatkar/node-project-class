const logging = require('./log.js')

var a = 1
var array =  [100, 200, 300]
var object  = {'a': {'d' : 1000}, 'b': 200, 'c': 4000}
var b = "b"

//callLogger('dhanashri',logger)
add(4,5)

function logger(a){
// console.log(a)
console.log(logging.name())
}

function callLogger(name, fun){
fun(name)
}

async  function add(a, b) {
   console.log(a + b)
   return 7
}
console.log(add(4,50))
// const addTo = () => {
    // console.log('dhanashri')
// }

function addTo(){
    console.log('dhanashri')
    return 6
}
module.exports.name = addTo