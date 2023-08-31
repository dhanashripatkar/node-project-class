const http = require('http') 
const fs = require('fs')// built-in-module
const index = fs.readFileSync('./app/index.html')
const css = fs.readFileSync('./app/styles.css')
const express = require('express')
const path = require('path')
const {home, login, getTask , createTask, getTaskById,updateTaskById, deleteTaskById} = require('./controllers/tasks')
const {getUser, createUser} = require('./controllers/users')
const {connectDB} = require("./db/conntDB")
const userRoutes = require('./routes/userRoutes')

//middle ware function
const addFunction = (req, res, next) => {
    let a=1
    const b= 1 
    if(a+b === 2){
      return next()
    }else{
       return res.send("sorry server busy")
    }
   }

const server  = express()
server.use(addFunction)
//for static files
server.use(express.static('./app'))

// getting data from post requst in req.body
server.use(express.urlencoded({extended: true}))
server.use(express.json())

//api's for home/user
server.use('/user', userRoutes)

server.get('/', home)
server.post('/login', login)
server.get('/tasks', getTask)
server.post('/tasks', createTask)
server.get('/tasks/:id', getTaskById)
server.put('/tasks/update/:id', updateTaskById)
server.delete('/tasks/delete/:id', deleteTaskById)

//for dynanamic id
server.get('/:id', (request, response) => {
    console.log(request.params.id)
    response.send("Hello Java")
})

server.put('/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("Test put")
})

server.delete('/:id/:name', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.name)
    console.log(req.body)
    res.send("Test Delete")
})


connectDB('mongodb+srv://dhanashri:Dhanashri123@cluster0.dvdkbw6.mongodb.net/node-app?retryWrites=true&w=majority').then(()=>{
    server.listen('9000', () => {
        console.log("server started")
        console.log(__dirname+"/app/index.js");
    })    
}).catch((err)=>{
    console.log(err);
})




/*const server = http.createServer((request, response) => { 

    const url = request.url
    console.log(url)

    if(url == '/'){
        console.log(request.method)
        response.writeHead(200, {'content-type' : 'text/html'} )
        response.write(index)
        response.end()
    }else if(url == '/about'){
        response.end("Dhanashri")
    }else if(url == '/styles.css'){
        response.writeHead(200, {'content-type' : 'text/css'} )
        response.write(css)
        response.end()
    }else{
        response.writeHead(404, {'content-type' : 'text/css'} )
        response.write(css)
        response.end("Response not found")
    }
})

server.listen('9000')*/