const express = require('express')
const router = express.Router()
const media_typeController = require('../controllers/media_type.controller')

router
    .get('/',media_typeController.get)
    .get('/:id',media_typeController.getById)
    .get('/filter/:name',media_typeController.getByName)
    .post('/',media_typeController.create)
    .post('/find',media_typeController.getOrMake)
    .put('/:id',media_typeController.update)
    .delete('/:id',media_typeController._delete)

module.exports = router;