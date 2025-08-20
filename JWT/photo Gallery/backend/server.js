import express from "express";
//.env
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/photos", photoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
