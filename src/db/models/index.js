const { EntityType, EntityTypeSchema } = require('./entity_type.model');

function setupModels(sequelize) {
    EntityType.init(EntityTypeSchema, EntityType.config(sequelize));
}

module.exports = setupModels;
