const express = require("express");
const stroeRepository = require("../repository/store");
const router = express.Router();

router.get("/1", async (req, res) => {
  return res.send(`안녕하세요~ 저는 문경 약돌돼지예요!이 집의 고기는 특별해요. 문경의 특산물, 바로 약돌돼지를 쓰거든요!약돌을 먹여 키운 돼지라서 고기가 더 담백하고 맛있답니다. 가격도 최대한 착하게 책정하셨기 때문에, 많은 사람들이 부담 없이 즐길 수 있답니다!`);
});

router.get("/2", async (req, res) => {
  return res.send(`안녕하세요, 저는 2013년에 멈춘 시계예요. 왜냐고요? 이 집은 2013년 이후로 단 한 번도 가격을 올리지 않았기 때문이죠. 색을 고려해서 소금으로 간을 하는 육회가 일반적이지만, 이곳은 간장으로 간을 해 색과 맛이 특별하죠. 근처에서 사극 촬영이 많다 보니 많은 유명 연예인들도 회식을 위해 이 가게를 찾아
왔답니다`);
});

module.exports = router;
