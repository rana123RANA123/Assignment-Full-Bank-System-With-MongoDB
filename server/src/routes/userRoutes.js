const express = require("express");
const router = express.Router();
const { Accounts, Transactions } = require("../models/userModel");
const mongoose = require("mongoose");
const dayjs = require("dayjs");

// Read Accounts data
router.get("/accounts", async (req, res) => {
    const accountsData = await Accounts.find();
    res.json(accountsData);
});

// Read a specific Account data
router.get("/accounts/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await Accounts.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const date = dayjs().format("YYYY-MM-DD");
const time = dayjs().format("HH:mm:ss");
const accountRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);

// Create Account
router.post("/addAccount", async (req, res) => {
    try {
        const accountData = new Accounts({
            _id: new mongoose.Types.ObjectId(),
            fullName: req.body.fullName,
            cnic: req.body.cnic,
            date: date,
            time: time,
            accountRandomId: accountRandomId,
            branchCode: req.body.branchCode,
            accountNumber: req.body.accountNumber,
            accountType: req.body.accountType,
            initialDeposit: req.body.initialDeposit,
        });
        const result = await accountData.save();
        res.json(result);
    } catch (error) {
        console.log("error : ", error);
        res.json({ error: "something went wrong!" });
    }
});

// delete Account
router.delete("/deleteAccount/:id", async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedUser = await Accounts.findByIdAndDelete(userId);
        console.log("deletedUser : ", deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user deleted successfuly!" });
        console.log("user deleted successfuly")
    } catch (error) {
        return res.status(500).json({ error: error.message });
        console.log("user deleted not-successfuly")
    }
});

// Update Account

router.put("/updateAccount/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const dataToBeUpdate = new Accounts({
            fullName: req.body.fullName,
            cnic: req.body.cnic,
            branchCode: req.body.branchCode,
            accountNumber: req.body.accountNumber,
            accountType: req.body.accountType,
            initialDeposit: req.body.initialDeposit,
        });

        const updatedData = await Accounts.findByIdAndUpdate(userId, dataToBeUpdate, {
            new: true,
        });
        console.log("updatedData : ", updatedData);

        if (!updatedData) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user updated successfuly!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// -------------------------------------------------------------------------------------------------



// Read Transactions data
router.get("/transactions", async (req, res) => {
    const transactionsData = await Transactions.find();
    res.json(transactionsData);
});

// Read a specific Account data
router.get("/transactions/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = await Transactions.findById(userId);

        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData: userData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const transactionDate = dayjs().format("YYYY-MM-DD");
const TransactionTime = dayjs().format("HH:mm:ss");
const transactionRandomId = Math.floor((1 + Math.random()) * 0x10000000000).toString(16).substring(1);


// Create Account
router.post("/addTransaction", async (req, res) => {
    try {
        const transactionData = new Transactions({
            _id: new mongoose.Types.ObjectId(),
            fullName: req.body.fullName,
            cnic: req.body.cnic,
            transactionDate: transactionDate,
            TransactionTime: TransactionTime,
            transactionRandomId: transactionRandomId,
            branchCode: req.body.branchCode,
            accountNumber: req.body.accountNumber,
            accountType: req.body.accountType,
            initialDeposit: req.body.initialDeposit,
        });
        const result = await transactionData.save();
        res.json(result);
    } catch (error) {
        console.log("error : ", error);
        res.json({ error: "something went wrong!" });
    }
});

// delete Account
router.delete("/deleteTransaction/:id", async (req, res) => {
    try {
        console.log(req.params);
        const userId = req.params.id;
        const deletedUser = await Transactions.findByIdAndDelete(userId);
        console.log("deletedUser : ", deletedUser);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found!" });
        }

        return res.json({ message: "user deleted successfuly!" });
        console.log("user deleted successfuly")
    } catch (error) {
        return res.status(500).json({ error: error.message });
        console.log("user deleted not-successfuly")
    }
});

// Update Account

router.put("/updateTransaction/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const dataToBeUpdate = new Transactions({
            fullName: req.body.fullName,
            cnic: req.body.cnic,
            branchCode: req.body.branchCode,
            accountNumber: req.body.accountNumber,
            accountType: req.body.accountType,
            initialDeposit: req.body.initialDeposit,
        });

        const updatedData = await Transactions.findByIdAndUpdate(userId, dataToBeUpdate, {
            new: true,
        });
        console.log("updatedData : ", updatedData);

        if (!updatedData) {
            return res.status(404).json({ message: "Transaction not found!" });
        }

        return res.json({ message: "Transaction data updated successfuly!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
