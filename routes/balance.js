const express = require("express");
const router = express.Router();
const Balance = require("../models/Balance");

// balance id=="5eabe12044a9c11490453485"
//   to get actual amount==  console.log(balance[0].Amount);
router.get("/", async (req, res) => {
  try {
    const balance = await Balance.find();
    res.json(balance);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/save", async (req, res) => {
  const newBalance = new Balance({
    Amount: req.body.Amount,
  });

  try {
    const savedBalance = await newBalance.save();
    res.json(savedBalance);
    console.log("Balance saved");
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/update/:id", async (req, res) => {
  await Balance.findByIdAndUpdate(
    req.params.id,
    {
      Amount: req.body.Amount,
    },
    function (err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

module.exports = router;
