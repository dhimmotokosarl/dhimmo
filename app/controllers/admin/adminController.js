const express = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../../models/userModel')
const jwt = require('jsonwebtoken');
const { generateToken } = require('../../utility/jwtToken');
require('dotenv').config();


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const getAllUsers = asyncHandler(async(req, res)=>{
    console.log('-------------- Get all users ----------------')
    try {
        const users = User.findAll()
        return res.json({
            success: true,
            data: users
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const getUser = asyncHandler(async(req, res)=>{
    console.log('-------------- Get a user ----------------')
    try {
        const {id} = req.params.id;

        const user = User.findOne({where: {id: id }})
        res.json({
            success: true,
            data: user
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const updateUser = asyncHandler(async(req, res)=>{
    console.log('-------------- Update a user ----------------')
    try {
        const {id} = req.params.id;

        const userToUpdate = User.findOne({where: {id: id }})

        res.json({
            success: true,
            data: userToUpdate
        })
        
    } catch (error) {
        throw new Error(error.message)
    }
})

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const deleteUser = asyncHandler(async(req, res)=>{
    console.log('-------------- Delete a user ----------------')
    try {
        const {id} = req.params.id;

        const userToDelete = User.findOne({where: {id: id }})

        res.json({
            success: true,
            data: userToDelete
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