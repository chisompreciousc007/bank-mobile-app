const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const TransactionSchema = new Schema({
  Account_Name: {
    type: String,
    required: true,
  },
  Account_Number: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Ref: {
    type: String,
  },
  Location: {
    type: String,
    default: "New York,USA",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
