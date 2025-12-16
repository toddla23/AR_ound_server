const express = require("express");
const router = express.Router();
const questionService = require("../service/question.js");

router.get("/:step", async (req, res) => {
  const step = Number(req.params.step);
  const result = questionService.getQuestion(step);
  return res.send(result);
});

module.exports = router;
