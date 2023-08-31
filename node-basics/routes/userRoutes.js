const express = require('express')
const routes = express.Router()
const {getUser, createUser, login, register, authRoute} =  require('../controllers/users')
const { verifyJWT } = require('../middleware/auth')

routes.get('/get', verifyJWT,getUser)
routes.post('/create', createUser)
routes.post('/login', login)
routes.post('/register', register)
routes.post('/auth', verifyJWT,authRoute)

module.exports = routes

//verifyJWT is authetication
//reg, login is authorization