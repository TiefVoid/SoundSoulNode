const express = require('express')
const router = express.Router()
const creatorController = require('../controllers/creator.controller')

router
    .get('/',creatorController.get)
    .get('/:id',creatorController.getById)
    .get('/filter/:name',creatorController.getByName)
    .post('/',creatorController.create)
    .put('/:id',creatorController.update)
    .delete('/:id',creatorController._delete)

module.exports = router;