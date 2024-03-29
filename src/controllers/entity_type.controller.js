const EntityTypeService = require('../services/entity_type.service'); // Import EntityTypeService
const service = new EntityTypeService(); // Create an instance of the EntityTypeService

const create = async (req, res) => {
    try {
        const body = req.body;
        const response = await service.create(body);
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getOrMake = async (req, res) => {
    try {
        const body = req.body;
        const name = body.name;
        const response = await service.findOrMake(name);
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getByName = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await service.findFiltered(name.toUpperCase());
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        body.name = body.name.toUpperCase();
        const response = await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create,
    getOrMake,
    get,
    getById,
    getByName,
    update,
    _delete
};
