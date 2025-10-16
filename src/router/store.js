const express = require("express");
const stroeRepository = require("../repository/store");
const stroeDetailRepository = require("../repository/storeDetail");
const router = express.Router();


router.get("/", async (req, res) => {
  const result = await stroeRepository.findAll();
  return res.send(result);
});

router.get("/:id", async(req, res) => {
  const storeId = req.params.id;
  result = await stroeDetailRepository.findById(storeId);
  return res.send(result)
});

module.exports = router;
