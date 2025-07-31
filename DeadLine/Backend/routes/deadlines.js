const express = require("express");
const router = express.Router();
const Deadline = require("../models/Deadline");

// GET all deadlines
router.get("/", async (req, res) => {
  try {
    const deadlines = await Deadline.find();
    res.json(deadlines);
  } catch (err) {
    res.status(500).json({ error: "Error fetching deadlines" });
  }
});

// POST create new deadline
router.post("/", async (req, res) => {
  try {
    const newDeadline = new Deadline(req.body);
    const saved = await newDeadline.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Error creating deadline" });
  }
});

// PATCH mark a deadline as completed
router.patch("/:id/complete", async (req, res) => {
  try {
    const updated = await Deadline.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error("Error updating deadline:", err.message);
    res.status(500).json({ error: "Error updating deadline" });
  }
});

// PUT /api/tasks/:id
router.put("/:id", async (req, res) => {
  try {
    const task = await Deadline.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
