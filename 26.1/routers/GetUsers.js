const express = require('express');
const router = express.Router();

const { getAll } = require('../model/User');

router.get('/', async (_req, res) => {
  const result = await getAll();
  res.status(200).json(result);
});

module.exports = router;
