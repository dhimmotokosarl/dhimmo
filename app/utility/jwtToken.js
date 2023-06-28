const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY =  process.env.SECRET_KEY || 'dhimmo237Smartdev';

const generateToken = (id) =>{
    return jwt.sign({id}, SECRET_KEY,{ expiresIn: '3h'})
}


module.exports  = {
    generateToken
}