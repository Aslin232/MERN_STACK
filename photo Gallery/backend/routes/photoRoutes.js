import express from "express";

import Photo from "../models/Photo.js";

const router = express.Router();

router.get("/random", async (req, res) => {
  try {
    const photos = await Photo.aggregate([{ $sample: { size: 10 } }]);
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const photos = await Photo.find({ category: req.params.category });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/:id/like", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    photo.likes += 1;
    await photo.save();
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
