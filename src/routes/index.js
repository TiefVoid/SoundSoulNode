const express = require('express')

const entityTypeRouter = require('./entity_type.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/type', entityTypeRouter)
}

module.exports = routerApi