require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notesRoute = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.error(err));

app.use("/api/notes", notesRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
