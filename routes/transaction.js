const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
// const { transactionValidation } = require("../validation");

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions.reverse());
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/post", async (req, res) => {
  //validate data before sending
  // const { error } = transactionValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const newTransaction = new Transaction({
    Account_Name: req.body.Account_Name,
    Account_Number: req.body.Account_Number,
    Amount: req.body.Amount,
    Ref: req.body.Ref,
  });

  try {
    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
    console.log("Transaction saved");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
