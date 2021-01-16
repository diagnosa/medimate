const express = require("express");

const models = require("../models");
const mList = models.MedicineList
const router = express.Router();

router.get("/today", async function(req, res) {
  const med = await models.MedicineList.find_today();
  return res.json(med);
});

  router.post('/add', function(req, res){
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

  router.post('/delete', function(req, res){
    return mList.destroy({
        where: {
            listID: req.body.list_id
        }
    }).then(function (mList) {
        if (mList) {
            res.status(200).send('Success in delete record')
        } else {
            res.status(400).send('Error in delete record');
        }
    });
  });

  router.post('/update', function(req, res){
    return mList.update(
        { 
            medicineName: req.body.medicine_name,
            intakeInterval: req.body.intake_interval,
            dosage: req.body.dosage,
            startDate: req.body.start_date,
            endDate: req.body.end_date
        },
        { where: { listID: req.body.list_id } }
      ).then(function(mList) { 
        if (mList) {
            res.status(200).send('Success in update record')
        } else {
            res.status(400).send('Error in update record');
        }
        })
  });


module.exports = router;
