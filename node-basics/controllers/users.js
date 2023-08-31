const user = require("../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {creatJWT} = require('../utils/utils')


const verifyJWT = (token) => {
    let id;
    jwt.verify(token,"abc",(err, data)=>{
        if (err) {
            console.log(err);
        }
        console.log(data);
        id=data.id
    })
    return id
}

const getUser = async (req, res) => {
    try {
        const  userJson = await user.find()
   console.log(userJson)
   if(userJson.length===0){
    return res.json({message: "No item in the list"})
   }
   return res.json({userJson})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error})
    }
   
}

const createUser = async (req, res) => {
    try{
    const  userJson = await user.create(req.body)
    console.log(userJson)
    return res.json({userJson})
} catch (error) {
    console.log(error);
    if (error.errors.age.message === "Path `age` is required.") {
        return res.status(500).json({error: "Subscription is required"})
    }
    return res.status(500).json({error})
}
 }

 const login = async (req, res) => {
    const {username, password} = req.body
    if (!username) return res.status(500).json({error: "Username is necessary"})
    if (!password) return res.status(500).json({error: "Password is necessary"})
    try{
    const  userJson = await user.findOne({username})
    if (!userJson) {
        return res.json({error: "user dosen't exist"})
    }else if (!bcrypt.compare(password,userJson.password)){
        return res.json({error: "wrong password"})
    }
    console.log(userJson)
    const token = await creatJWT(userJson._id.toString())
    return res.json({id: userJson._id, username,token })
} catch (error) {
    console.log(error);
    // if (error.errors.age.message === "Path `age` is required.") {
    //     return res.status(500).json({error: "Subscription is required"})
    // }
    return res.status(500).json({error})
}
 }

 // registration with encrypted password
 //just a function

 const encryptedRegi = async(password) => {
    try{
const salt = await bcrypt.genSalt(10)
const nPassword = await bcrypt.hash(password, salt)
return nPassword

    }catch(error){
 console.log(error)
 return error
    }
 }

 //normal registeration
 const register = async (req, res) => {
    try{
        const {username, name} = req.body
        const password = await encryptedRegi(req.body.password)
    const  userJson = await user.create({username, password, name})
    console.log(userJson)
    const token = await creatJWT(userJson._id.toString())
    return res.json({userJson, token})
} catch (error) {
    console.log(error);
    if (error.errors.age.message === "Path `age` is required.") {
        return res.status(500).json({error: "Subscription is required"})
    }
    return res.status(500).json({error})
}
 }

 const authRoute = async (req, res) => {
    try {
   return res.json({userId: req.userId})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error})
    }
   
}

module.exports = {getUser, createUser, login, register, authRoute}