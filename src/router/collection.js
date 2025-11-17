const express = require("express");
const router = express.Router();
const collectionRepository = require("../repository/collection.js");

router.get("/:id", async (req, res) => {
  const storeId = req.params.id;
  result = await collectionRepository.save(storeId);
  return res.send(result);
});

router.get("/", async (req, res) => {
    console.log("asd")
  result = await collectionRepository.findAll();
  return res.send(result);
});

module.exports = router;
