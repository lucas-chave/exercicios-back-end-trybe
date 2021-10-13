const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routerCep = require('./routes/Ceps');

app.use(bodyparser.json());

app.use(routerCep);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`aplicação rodando na porta ${PORT}`);
});
