const { Model, DataTypes } = require('sequelize');

const CREATOR_TABLE = 'creator';

class Creator extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CREATOR_TABLE,
            modelName: 'Creator',
            timestamps: true
        }
    }
}

const CreatorSchema = {
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

module.exports = { Creator, CreatorSchema }