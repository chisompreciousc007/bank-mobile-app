const express = require("express");
const router = express.Router();
const Banker = require("../models/User");
const jwt = require("jsonwebtoken");

// balance id=="5eabe12044a9c11490453485"
//   to get actual amount==  console.log(balance[0].Amount);
router.get("/", async (req, res) => {
  try {
    const balance = await banker.find();
    res.json(balance);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();

    // check if user is registered
    const user = await Banker.findOne({ email: lowercaseEmail });
    if (!user) return res.status(400).send("Incorrect Username or password");
    // hash password
    if (password !== user.password)
      return res.status(400).send("Incorrect username or Password");

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "168h",
    });
    var now = new Date();
    now.setTime(now.getTime() + 167 * 3600 * 1000);

    res.setHeader(
      "Set-Cookie",
      `token=${token};path=/;httpOnly;expires=${now.toUTCString()}`
    );

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
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
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await Banker.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted User");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.patch("/balance/:email", async (req, res) => {
  try {
    const { Account_Name, Amount } = req.body;
    const updateBalance = await Banker.findOneAndUpdate(
      { email: req.params.email },
      { $inc: { balance: -Amount } },
      { new: true }
    );
    const updateTransactions = await Banker.findOneAndUpdate(
      { email: req.params.email },
      {
        $push: {
          transactions: {
            name: Account_Name,
            amount: Amount,
            date: new Date(),
          },
        },
      },
      { new: true }
    );
    res.status(200).send(updateTransactions);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      balance,
      password,
      accountNo,
      phone,
      transactions,
      subAccounts,
      verifyCode,
    } = req.body;
    const User = new Banker({
      name: name,
      email: email,
      balance: balance,
      password: password,
      accountNo: accountNo,
      phone: phone,
      transactions: transactions,
      subAccounts: subAccounts,
      verifyCode: verifyCode,
    });
    const savedUser = await User.save();
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
