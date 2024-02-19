const { body } = require('express-validator');

// EntityType Schemas
const entityTypeCreateSchema = [
    body('name').isString().withMessage('Name must be a string').trim().notEmpty().withMessage('Name is required'),
];

const entityTypeUpdateSchema = [
    body('name').isString().withMessage('Name must be a string').trim().notEmpty().withMessage('Name is required'),
];

module.exports = {
    entityTypeCreateSchema,
    entityTypeUpdateSchema
};