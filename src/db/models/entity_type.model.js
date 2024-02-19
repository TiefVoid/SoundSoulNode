const { Model, DataTypes } = require('sequelize');

const ENTITY_TYPE_TABLE = 'entity_type';

class EntityType extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ENTITY_TYPE_TABLE,
            modelName: 'EntityType',
            timestamps: true // Assuming you want timestamps (created_at, updated_at)
        }
    }
}

const EntityTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true, // Ensure uniqueness of the "name" column
        field: 'name'
    }
}

module.exports = { EntityType, EntityTypeSchema }
