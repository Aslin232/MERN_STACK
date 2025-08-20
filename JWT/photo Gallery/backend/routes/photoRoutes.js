import express from "express";
import Photo from "../models/Photo.js";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
// Get all photos
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("category/:category", async (req, res) => {
  const photos = await Photo.find({ category: req.params.category });
  res.json(photos);
});
router.post("/:id/like", authMiddleware, async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.likedPhotos.includes(photo._id)) {
      photo.likes += 1;
      user.likedPhotos.push(photo._id);
      await photo.save();
      await user.save();
      return res.json({ message: "Photo liked", likes: photo.likes });
    } else {
      return res.json({ message: "Already liked", likes: photo.likes });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
export default router;
