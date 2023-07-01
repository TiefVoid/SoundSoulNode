const { models } = require('../libs/sequelize')

class MediaTypeService {
    constructor() {}

    async find() {
        const res = await models.MediaType.findAll()
        return res
    }

    async findOne(id) {
        const res = await models.MediaType.findByPk(id)
        return res
    }

    async findFiltered(data) {
        const res = await models.MediaType.findOne({ where: { name: data } })
        return res
    }

    async findOrMake(data) {
        const res = await models.MediaType.findCreateFind({ where: { name: data } })
        return res
    }

    async create(data) {
        const res = await models.MediaType.create(data)
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

module.exports = MediaTypeService