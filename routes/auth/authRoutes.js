const express = require('express')

const authController = require('../../app/controllers/auth/authController')

const authRoutes = express.Router()


authRoutes.post('/register', authController.register)
authRoutes.post('/login', authController.login)
// authRoutes.post('/resetpassword', authController.resetPassword)
// authRoutes.post('/emailconfirmation', authController.confirmEmail)
// authRoutes.post('/logout', authController.logout)

module.exports = authRoutes