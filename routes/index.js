/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//imports
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth/authRoutes')
const adminRoutes= require('./admin/adminRoutes');
const { authMiddleware , isAdmin } = require('../app/middlewares/authMiddleware');
// const propertyRoutes = require('./property/propertyRoutes');

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//routes
router.use('/auth', authRoutes)
router.use('/admin', authMiddleware, isAdmin, adminRoutes)
// router.use('/properties', propertyRoutes);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = router;
