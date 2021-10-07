const { connection } = require('./connection'); 

const create = async (firstName, lastName, email, password) => {
  const result = (await connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))).insertedId;
  return {
    id: result,
    firstName,
    lastName,
    email,
  };
};

module.exports = {
  create,
};
