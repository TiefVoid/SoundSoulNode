const { Model, DataTypes } = require('sequelize');

const MEDIA_TYPE_TABLE = 'media_type';

class MediaType extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MEDIA_TYPE_TABLE,
            modelName: 'MediaType',
            timestamps: true
        }
    }
}

const MediaTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.CHAR,
        field: 'name'
    }
}

module.exports = { MediaType, MediaTypeSchema }