const express = require('express');
const router = express.Router();

const { getUserById } = require('../model/User');

const validateUser = async (req, res, next) => {
  const { id } = req.params;
  const response = await getUserById(id);
  if(!response) return res.status(401).json({ message: 'user not found!' });
  next();
};

router.get('/:id', validateUser, async (req, res) => {
  const { id } = req.params;
  const response = await getUserById(id);
  res.status(200).json(response);
});

module.exports = router;
