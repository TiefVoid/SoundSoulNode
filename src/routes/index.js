const express = require('express')

const creatorRouter = require('./creator.router')
const media_typeRouter = require('./media_type.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/creator', creatorRouter)
    router.use('/media_type', media_typeRouter)
}

module.exports = routerApi