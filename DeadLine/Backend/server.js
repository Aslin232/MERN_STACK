const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const deadlineRoutes = require("./routes/deadlines");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", deadlineRoutes); // This URL is still okay even if it's /tasks

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5001, () => {
      console.log("🚀 Server running on port 5001");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
