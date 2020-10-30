const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const BankerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
    accountNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyCode: {
      type: String,
      required: true,
    },
    balance: { type: Number, default: 0 },
    transactions: [
      {
        name: { type: String },
        amount: { type: Number, default: 0 },
        date: { type: Date, default: new Date() },
      },
    ],
    subAccounts: [
      {
        title: { type: String },
        subTitle: { type: String },
        balance: { type: Number, default: 0 },
        subBalance: { type: String },
      },
    ],
  },
  { timestamps: true }
);
BankerSchema.plugin(uniqueValidator, { message: "is already taken." });

module.exports = mongoose.model("Banker", BankerSchema);
