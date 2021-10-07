const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const addUser = require('./routers/AddUser');
const getAllUser = require('./routers/GetUsers');

app.use(bodyparser.json());

app.use('/user', addUser);
app.use('/users', getAllUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
