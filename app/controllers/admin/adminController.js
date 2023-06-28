const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../../models/userModel')
const jwt = require('jsonwebtoken');
const { generateToken } = require('../../utility/jwtToken');
require('dotenv').config();


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const getAllUsers = asyncHandler(async(req, res)=>{
    try {
        const users = User.findAll()

        res.json({
            success: true,
            data: users
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const getUser = asyncHandler(async(req, res)=>{
    try {
        const users = User.findAll()

        res.json({
            success: true,
            data: users
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const updateUser = asyncHandler(async(req, res)=>{
    try {
        const users = User.findAll()

        res.json({
            success: true,
            data: users
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const deleteUser = asyncHandler(async(req, res)=>{
    try {
        const users = User.findAll()

        res.json({
            success: true,
            data: users
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
}