const router = require("express").Router();
const Transaction = require("../models/transaction.model");

router.post("/", async (req, res) => {
  try {
    await new Transaction(req.body).save();
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const transactionHistory = await Transaction.find({ email });
    if (!transactionHistory.length) {
      return res.json({ message: "No transactions have been made till now" });
    }
    return res.json(transactionHistory);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
