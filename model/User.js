const { connection } = require('./connection'); 
const { ObjectId } = require('mongodb');

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

const getAll = async () => {
  const result = await connection().then((db) => db.collection('users').find().toArray());
  return result;
};

const getUserById = async (id) => {
  const result = await connection().then((db) => db.collection('users').find({ _id: ObjectId(id) }));
  return result;
};

module.exports = {
  create,
  getAll,
  getUserById,
};
