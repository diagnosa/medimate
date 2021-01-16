const express = require("express");

const models = require("../models");

const router = express.Router();

router.get("/today", async function(req, res) {
  const med = await models.medicine_list.find_today();
  return res.json(med);
});

module.exports = router;
