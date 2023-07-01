const express = require('express')
const router = express.Router()
const creatorController = require('../controllers/creator.controller')

router
    .get('/',creatorController.get)
    .get('/:id',creatorController.getById)
    .get('/filter/:name',creatorController.getByName)
    .post('/',creatorController.create)
    .post('/find',creatorController.getOrMake)
    .put('/:id',creatorController.update)
    .delete('/:id',creatorController._delete)

module.exports = router;