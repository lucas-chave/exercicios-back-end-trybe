const express = require('express');
const router = express.Router();

const { updateUser } = require('../model/User');

router.put('/:id', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  const response = await updateUser(firstName, lastName, password, email, id);
  res.status(201).json(response);
});

module.exports = router;
