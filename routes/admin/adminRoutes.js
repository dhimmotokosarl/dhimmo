const express = require('express')
const adminController = require('../../app/controllers/admin/adminController')

const adminRoutes = express.Router()


//Routes related to admin account
//Routes related to users management
adminRoutes.get('/users', adminController.getAllUsers)
adminRoutes.get('/users/:id', adminController.getUser)
adminRoutes.put('/users/:id', adminController.updateUser)
adminRoutes.delete('/users/:id', adminController.deleteUser)
//Routes related to categories management
//Routes related to properties management

module.exports = adminRoutes