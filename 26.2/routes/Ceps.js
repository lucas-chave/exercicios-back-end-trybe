const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/Ceps');

router.get('/ceps', getAll);

module.exports = router;