const { getAllCeps } = require('../service/Ceps');

const getAll = async (_req, res) => {
  try {
    const ceps = await getAllCeps();
    res.status(200).json(ceps);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Aconteceu um erro ao buscar os dados no servidor' });
  }
};

const getPing = async (_req, res) => {
  try {
    res.status(200).json({ message: 'pong!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'erro ao realizar requisição' });
  }
};

module.exports = {
  getAll,
  getPing,
};
