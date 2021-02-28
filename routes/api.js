const { Router } = require('express');
const v2Route = require('./v2Route');

const api = Router();

api.use('/v2', v2Route);

module.exports = api;
