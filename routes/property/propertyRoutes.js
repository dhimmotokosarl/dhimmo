const express = require('express')
const propertyRouter = express.Router()
const propertyController = require('../app/controllers/property/propertyController')

propertyRouter.get('/', propertyController.index)
propertyRouter.get('/:id', propertyController.show)
propertyRouter.post('/', propertyController.create)
propertyRouter.put('/:id', propertyController.update)
propertyRouter.delete('/:id', propertyController.destroy)

module.exports = propertyRouter
