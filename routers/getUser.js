const express = require('express');
const router = express.Router();

const { getUserById } = require('../model/User');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = getUserById(id);
  res.status(200).json(response);
});
