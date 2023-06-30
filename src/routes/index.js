const express = require('express')

const creatorRouter = require('./person.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/creator', creatorRouter)
}

module.exports = routerApi