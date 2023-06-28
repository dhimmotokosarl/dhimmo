const express = require('express')
const adminController = require('../../app/controllers/admin/adminController')

const adminRoutes = express.Router()


//Routes related to admin account
//Routes related to users management
adminRoutes.get('/', adminController.getAllUsers)
adminRoutes.get('/:id', adminController.getUser)
adminRoutes.put('/:id', adminController.updateUser)
adminRoutes.delete('/:id', adminController.deleteUser)
//Routes related to categories management
//Routes related to properties management

module.exports = adminRoutes