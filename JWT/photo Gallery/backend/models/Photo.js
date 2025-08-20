import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  category: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

export default mongoose.model("Photo", photoSchema);
