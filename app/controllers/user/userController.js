const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../../models/userModel')
const jwt = require('jsonwebtoken');
const { generateToken } = require('../../utility/jwtToken');
require('dotenv').config();


const getAllUsers = asyncHandler(async(req, res)=>{
    try {
        
    } catch (error) {
        throw new Error(error.message)
    }
})

module.exports = {
    getAllUsers,
}