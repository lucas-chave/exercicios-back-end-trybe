const express = require('express');

const router = express.Router();

const {
  create,
} = require('../model/User');

const validatePayload = (req, res, next)  => {
  const { email, password } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(422).json({ message: 'invalid password!' });
  }
  if (!regexEmail.test(email)) {
    return res.status(422).json({ message: 'invalid email!' });
  }
  next();
};

router.post('/', validatePayload, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await create(firstName, lastName, email, password);

  res.status(201).json(user);
});

module.exports = router;
