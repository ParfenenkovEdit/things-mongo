const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const {
    createThing,
    getAllThings,
    getThingById,
    updateThingById,
    deleteThingById
} = require('../services/things');

const things = Router();

things.get('/', asyncHandler(async (req, res) => {
    const { page, limit } = req.query;

    if (parseInt(page) <= 0) {
        return res.status(301).redirect(`${req.baseUrl}/?page=1&limit=${limit || 10}`);
    }

    const things = await getAllThings({ page, limit });

    res.send(things);
}));

things.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;

    const thing = await getThingById(id);

    res.send(thing);
}));

things.post('/', asyncHandler(async (req, res) => {
    const { title, body = null } = req.body;

    if (!title) {
        res.sendStatus(400);
    }

    await createThing({ title, body });

    res.sendStatus(201);
}));

things.put('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;


    if (!title || (body !== null && !body)) {
        res.sendStatus(400);
    }

    await updateThingById({ id, title, body });

    res.sendStatus(201);
}));

things.delete('/:id', asyncHandler (async (req, res) => {
    const { id } = req.params;

    await deleteThingById(id);

    res.sendStatus(200);
}));


module.exports = things;
