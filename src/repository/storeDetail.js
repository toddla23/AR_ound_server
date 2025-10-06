const connection = require("../config/connection");

const findById = async (id) => {
  const [[result], field] = await connection.query(
    "SELECT * FROM store_detail WHERE store_id = ?",
    [id]
  );
  return result;
};

const stroeDetailRepository = { findById };

module.exports = stroeDetailRepository;
