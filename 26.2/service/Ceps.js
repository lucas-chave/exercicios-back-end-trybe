const { getAll } = require('../model/Ceps');

const getAllCeps = async () => {
  const result = await getAll();
  return result;
};

module.exports = {
  getAllCeps,
};
