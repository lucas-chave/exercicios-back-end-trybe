const express = require('express');
const router = express.Router();
const { getAll, getPing } = require('../controller/Ceps');

router.get('/ceps', getAll);
router.get('/ping', getPing);

module.exports = router;