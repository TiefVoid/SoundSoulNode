const { models } = require('../libs/sequelize');

class EntityTypeService {
    constructor() {}

    async find() {
        const res = await models.EntityType.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.EntityType.findByPk(id);
        return res;
    }

    async findFiltered(data) {
        const res = await models.EntityType.findOne({ where: { name: data } });
        return res;
    }

    async findOrMake(data) {
        const res = await models.EntityType.findCreateFind({ where: { name: data } });
        return res;
    }

    async create(data) {
        const res = await models.EntityType.create(data);
        return res;
    }

    async update(id, data) {
        const entity = await this.findOne(id);
        if (!entity) {
            throw new Error('Entity not found');
        }
        const res = await entity.update(data);
        return res;
    }

    async delete(id) {
        const entity = await this.findOne(id);
        if (!entity) {
            throw new Error('Entity not found');
        }
        await entity.destroy();
        return { deleted: true };
    }
}

module.exports = EntityTypeService;
