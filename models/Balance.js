const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const BalanceSchema = new Schema({
  Amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Balance", BalanceSchema);
