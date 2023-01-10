const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
});

const transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transaction;
