const express = require('express');
const router = express.Router();
const entityTypeController = require('../controllers/entity_type.controller'); // Import EntityType controller
const { validate } = require('../validation/validation');
const { entityTypeCreateSchema, entityTypeUpdateSchema } = require('../validation/validationSchemas');

router
    .get('/', entityTypeController.get) // Route to get all entities
    .get('/:id', entityTypeController.getById) // Route to get entity by ID
    .get('/filter/:name', entityTypeController.getByName) // Route to filter entities by name
    .post('/', validate(entityTypeCreateSchema), entityTypeController.create) // Route to create a new entity
    .post('/find', validate(entityTypeCreateSchema), entityTypeController.getOrMake) // Route to find or create an entity
    .put('/:id', validate(entityTypeUpdateSchema), entityTypeController.update) // Route to update an entity by ID
    .delete('/:id', entityTypeController._delete); // Route to delete an entity by ID

module.exports = router;
