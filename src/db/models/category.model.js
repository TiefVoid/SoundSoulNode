const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'category';

class Category extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: true, // Assuming you want timestamps (created_at, updated_at)
            uniqueConstraints: [
                {
                    fields: ['name', 'type_id'] // Define a composite unique constraint across "name" and "type_id"
                }
            ]
        };
    }
}

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    type_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
            model: 'entity_type', // Name of the referenced model (entity_type)
            key: 'id' // Name of the referenced column (id)
        }
    }
};

module.exports = { Category, CategorySchema };
