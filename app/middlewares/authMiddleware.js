const User =  require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
require('dotenv').config()

const SECRET_KEY =  process.env.SECRET_KEY || 'dhimmo237Smartdev';


const authMiddleware = asyncHandler(async(req, res, next)=>{
    let token;

    if(req?.headers?.authorization.startsWith("Bearer ")){

        token = req.headers.authorization.split(" ")[1]
        try {
            if(token){
                const decodedToken = jwt.verify(token, SECRET_KEY)
                const user = await User.findOne({where : { id: decodedToken?.id}})
                req.user = user
                next()
            }   

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Token expired or you are not allowed to access this resource',
                error: 'Unauthorized'
            })
        }

    }else{
     
        return res.status(401).json({
            success: false,
            message: 'You are not authorized to access this resource',
            error: 'Unauthorized'
        })
    }
})


const isAdmin = asyncHandler(async(req, res, next)=>{
    // console.log(req.user);

    const {email, phone} = req.user;

    const foundUser = await User.findOne({where: {email: email, phone: phone}})
    if(!foundUser.isAdmin  || foundUser.role !== 'admin'){
        //the user loggedin is not an admin 
        // throw new Error('You are not authorized to access this resource')
        return res.status(401).json({
            success: false,
            message: 'You are not authorized to access this resource',
            error: 'Unauthorized'
        })

    }else{
        next()
    }
})

module.exports = {
    authMiddleware,
    isAdmin
}