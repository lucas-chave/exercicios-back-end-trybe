const express = require('express');
const router = express.Router();

const { deleteUserById } = require('../model/User');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await deleteUserById(id);

  res.status(201).json(response);
});

module.exports = router;