const { Creator, CreatorSchema } = require('./persons.model');

function setupModels(sequelize) {
    Creator.init(CreatorSchema, Creator.config(sequelize));
}

module.exports = setupModels;