const express = require("express");
const app = express();
const { PORT } = require("./config.json");
const questionRouter = require("./router/question.js");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/questions", questionRouter);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
