const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    fullName: String,
    cnic: Number,
    branchCode: Number,
    accountNumber: Number,
    date: String,
    time: String,
    accountRandomId: String,
    accountType: String,
    initialDeposit: Number,
  },
  { collection: "accounts", versionKey: false }
);

const Accounts = mongoose.model("accounts", accountSchema);


// --------------------------------------------------------------------------------------------------


const transactionSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    fullName: String,
    cnic: Number,
    branchCode: Number,
    accountNumber: Number,
    transactionDate: String,
    TransactionTime: String,
    accountType: String,
    transactionRandomId: String,
    initialDeposit: Number,
  },
  { collection: "transactions", versionKey: false }
);

const Transactions = mongoose.model("transactions", transactionSchema);

module.exports = { Accounts, Transactions };
