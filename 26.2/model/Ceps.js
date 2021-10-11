const { connection } = require('./connection');

const getAll = async () => {
  const db = await connection();
  const result = await db.collection('ceps').find().toArray;
  return result;
};

module.exports = {
  getAll,
};
