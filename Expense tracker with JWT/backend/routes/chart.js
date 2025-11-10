
import express from "express";
import jwt from "jsonwebtoken";
import ChartData from "../models/ChartData.js";

const router = express.Router();


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

router.post("/", verifyToken, async (req, res) => {
  try {
    const { name, amount, purpose, time } = req.body;

    const newEntry = new ChartData({
      user: req.userId,
      name,
      amount,
      purpose,
      time,
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/", verifyToken, async (req, res) => {
  try {
    const entries = await ChartData.find({ user: req.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
