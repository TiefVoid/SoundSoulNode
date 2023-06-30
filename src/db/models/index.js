const { Creator, CreatorSchema } = require('./creator.model');

function setupModels(sequelize) {
    Creator.init(CreatorSchema, Creator.config(sequelize));
}

module.exports = setupModels;