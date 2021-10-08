const express = require('express');
const router = express.Router();

const { updateUser } = require('../model/User');

const validateData = (req, res, next) => {
  const regexEmail = /\S+@\S+\.\S+/;
  const { firstName, lastName, email, password } = req.body;
  if (!firstName) {
    return res.status(422).json({ message: 'first name invalid!' });
  }
  if (!lastName) {
    return res.status(422).json({ message: 'last name invalid!' });
  }
  if (!regexEmail.test(email)) {
    return res.status(422).json({ message: 'email invalid!' });
  }
  if (password.length < 6) {
    return res.status(422).json({ message: 'password invalid!' });
  }
  next();
};

router.put('/:id', validateData, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  const response = await updateUser(firstName, lastName, password, email, id);
  res.status(201).json(response);
});

module.exports = router;
