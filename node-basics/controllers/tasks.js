const Task = require('../models/task')

const home = (request, response) => {
    const{name, age} = request.query
    console.log(name, age)
    response.set('content-type', 'text/html').status(200)
    response.sendFile(path.join(__dirname, 'app','index.html' ))
}

const login = (req,res)=>{
    const {name, password} = req.body
    console.log(name, password)
    res.send("this is post api")
}

const getTask = async (req,res)=>{
    const task = await Task.find()
    const {name, password} = req.body
    console.log(name, password)
    res.json({task})
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    // const {name, password} = req.body
    // console.log(name, password)
    res.json({task})
}

const getTaskById = async (req,res)=>{
    const task = await Task.findById({_id: req.params.id})
    // const {name, password} = req.body
    // console.log(name, password)
    res.json({task})
}

const updateTaskById = async (req,res)=>{
    const task = await Task.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
    res.json({task})
}

const deleteTaskById = async (req,res)=>{
    const task = await Task.findByIdAndDelete({_id: req.params.id})
    res.json({task})
}

module.exports = {home, login, getTask, createTask, getTaskById, updateTaskById, deleteTaskById}