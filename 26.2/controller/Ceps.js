const { getAllCeps } = require('../service/Ceps');

const getAll = async (req, res) => {
  try {
    const ceps = await getAllCeps();
    res.status(200).json(ceps);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu um erro ao buscar os dados no servidor' });
  }
};
