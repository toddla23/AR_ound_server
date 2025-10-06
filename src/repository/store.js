const connection = require("../config/connection");

const findAll = async () => {
  const [result, field] = await connection.query("SELECT * FROM store");
  return result;
};

const stroeRepository = { findAll };

module.exports = stroeRepository;
