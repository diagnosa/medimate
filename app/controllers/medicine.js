const express = require("express");

const models = require("../models");

const router = express.Router();

router.get("/", async function(req, res) {
  const med = await models.Medicine.find_today();
  return res.json(med);
});

module.exports = router;
