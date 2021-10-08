const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`aplicação rodando na porta ${PORT}`);
});
