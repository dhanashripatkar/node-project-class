const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"]
    jwt.verify(token,"abc",(err, data)=>{
        if (err) {
            console.log(err);
            return res.status(401).json({error: "invalid token"})
        }
        console.log(data);
        //why id? since we have created an object with id in createJwt method
        req.userId=data.id
        next()
    })
}

module.exports = {verifyJWT}