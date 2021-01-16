const express = require("express");

const models = require("../models");
const mList = models.MedicineList
const router = express.Router();

router.get("/today", async function(req, res) {
  const med = await models.MedicineList.find_today();
  return res.json(med);
});

  router.post('/add', function(req, res){
      console.log(req.body)
    return mList.create({
        medicineName: req.body.medicine_name,
        intakeInterval: req.body.intake_interval,
        dosage: req.body.dosage,
        startDate: req.body.start_date,
        endDate: req.body.end_date
    }).then(function (mList) {
        if (mList) {
            res.send(mList);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
  });

module.exports = router;
