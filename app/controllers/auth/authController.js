const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../../utility/jwtToken');
require('dotenv').config();


//var
const SALTS_ROUND = process.env.HASH_SALTS_ROUND || 10;
const SECRET_KEY =  process.env.SECRET_KEY || 'dhimmo237Smartdev';
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const register = asyncHandler(
    async(req, res)=>{
        console.log('-------------Register a new user account-------------')
        const {name, email, phone, password, role } = req.body;

        const foundUser = await User.findOne({ where: { email: email, phone: phone}})

        //no user found with the same email and phone
        if(!foundUser){

            //user register with undefined password 
            if(!password){
                  //create user account
                  const newUser = await User.create({ 
                    name: name,
                    email: email ? email : null, 
                    phone: phone,
                    role: role ? role : "user"
                }) 

                //generate OTP Code
                
                //send response
               return res.json({
                    success: true,
                    message: "Registration successful",
                    data: newUser
                })
            }

            //user registers with a password, then we hash the password
            bcrypt.hash(password, 10, async(error, hash)=>{
                if(!error){
                    hashedPassword = hash;
                    console.log(`Hashed password ${hashedPassword}`);
                    
                    //create user account
                    const newUser = await User.create({ 
                        name: name,
                        email: email, 
                        phone: phone,
                        password: password ? hashedPassword: null,
                        role: role ? role : "user"
                    }) 

                    //generate OTP Code
                    
                    //send response
                   return res.json({
                        success: true,
                        message: "Registration successful",
                        data: newUser
                    })

                }else{
                    return res.status(400).json({
                        success:false, 
                        message:"An internal server error occurred, Please try again", 
                        error: `${error.message}`
                    })
                }
            })

            
        }else{
            return res.status(401).json({
                success: false,
                message:` Email ${email} and Number ${phone} already used`,
            })
        }
    }      
) 
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const login = asyncHandler(
    async(req, res)=>{
        console.log('-------------login a user trying to authenticate-------------')
        const {email, phone, password} = req.body
        console.log(email);

        if(email === undefined){
            const userExist = await User.findOne({where: {phone: phone}})
            console.log("email is undefined")
        }
        
        const userExist = await User.findOne({where: {email: email}})
        
        
        if(userExist){
            //check password is correct
            bcrypt.compare(password, userExist.password, (error, result)=>{
                
                //error occurred in checking password
                if(error){
                    return res.status(500).json({
                        success: false,
                        message: 'Internal server error occurred. Please try again later.'
                    })
                }

                //result is false, ie passwords are different
                if(!result){
                    return res.status(401).json({
                        success: false,
                        message: 'Invalid credentials, Please try again.'
                    })
                }

                //generate a login token
                token = generateToken(userExist?.id);

                res.json({
                    success: true,
                    message: 'Login successful',
                    token: token,
                    data: userExist
                })
            }) 

            // res.json({
            //     success: true,
            //     message: 'Login successful'
            // })
        }else{
           return res.status(403).json({
                success: false,
                message: 'Invalid credentials',
            })
        }
    }
) 

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
module.exports = {
    register,
    login
}