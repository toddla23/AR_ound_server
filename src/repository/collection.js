const connection = require("../config/connection");
const findAll = async () => {
  const [result, field] = await connection.query("SELECT * FROM collection");
  return result;
};

const save = async (storeId) => {
  const [result, field] = await connection.query("INSERT INTO collection (store_id) VALUES (?)", [storeId]);
  return result;
};

const collectionRepository = { findAll, save};

module.exports = collectionRepository;
