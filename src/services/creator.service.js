const { models } = require('../libs/sequelize')

class CreatorService {
    constructor() {}

    async find() {
        const res = await models.Creator.findAll()
        return res
    }

    async findOne(id) {
        const res = await models.Creator.findByPk(id)
        return res
    }

    async findFiltered(data) {
        const res = await models.Creator.findOne({ where: { name: data } })
        return res
    }

    async create(data) {
        const res = await models.Creator.create(data)
        return res
    }

    async update(id, data) {
        const model = await this.findOne(id)
        const res = await model.update(data)
        return res
    }

    async delete (id) {
        const model = await this.findOne(id)
        await model.destroy()
        return { deleted: true }
    }
}

module.exports = CreatorService