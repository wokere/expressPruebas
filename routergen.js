const express = require('express')

module.exports = (controllername) => {
    const controller = require('./handlers/'+controllername)
    const router = express.Router()

    if(controller.add) {
        router.post('/', controller.add)
    }
    if(controller.list) {
        router.get('/', controller.list)
    }
    if(controller.show) {
        router.get('/:id', controller.show)
    }
    if(controller.edit) {
        router.put('/:id', controller.edit)
    }
    if(controller.delete) {
        router.delete('/:id', controller.delete)
    }
    return router
}
