const jwt = require('jsonwebtoken')

const creatJWT = (id) => {
    const token = jwt.sign({id}, "abc", {
        expiresIn: 60 * 60,
    })
    return token
}
module.exports = {creatJWT}