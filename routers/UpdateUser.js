const express = require('express');
const router = express.Router();

const { updateUser } = require('../model/User');

router.put('/:id', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;
  const response = updateUser(firstName, lastName, email, id);
  res.status(201).json(response);
});

module.exports = router;
