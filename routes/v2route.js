const { Router } = require('express');
const things = require('./things');

const v2Route = Router();

v2Route.use('/things', things);

module.exports = v2Route;
