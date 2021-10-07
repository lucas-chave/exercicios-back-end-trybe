const express = require('express');
const router = express.router();

const {
  create,
} = require('../model/User');

router.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await create(firstName, lastName, email, password);

  res.status(201).json({ user })
});

module.exports = router;