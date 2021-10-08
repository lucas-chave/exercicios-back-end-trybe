const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'exerciseModel';
let db = null;

const connection = async () => {
  if (db) return Promise.resolve(db);
  const conn = MongoClient.connect(MONGO_DB_URL, OPTIONS);
  const connect = await (await conn).db(DB_NAME);
  return connect;
};

module.exports = {
  connection,
};
