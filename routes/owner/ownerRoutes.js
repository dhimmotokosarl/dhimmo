const express = require('express')
const ownerController = require('../app/controllers/owner/ownerController')

const ownerRouter = express.Router()

ownerRouter.get('/', ownerController.index)
ownerRouter.get('/:id', ownerController.show)
ownerRouter.post('/', ownerController.create)
ownerRouter.put('/:id', ownerController.update)
ownerRouter.delete('/:id', ownerController.destroy)

module.exports = ownerRouter