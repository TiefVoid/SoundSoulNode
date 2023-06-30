const express = require('express')
const router = express.Router()
const creatorController = require('../controllers/persons.controller')

router
    .get('/',creatorController.get)
    .get('/:id',creatorController.getById)
    .post('/',creatorController.create)
    .put('/:id',creatorController.update)
    .delete('/:id',creatorController._delete)

module.exports = router;