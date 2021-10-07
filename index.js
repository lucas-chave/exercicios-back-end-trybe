const express = require('express');
const app = express();

const addUser = require('./middlewares/AddUser');
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use('/user', addUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
