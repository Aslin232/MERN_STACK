import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import photoRoutes from "./routes/photoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use("/api/photos", photoRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server running st ${PORT}`));
