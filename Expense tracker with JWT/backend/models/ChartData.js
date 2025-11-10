import mongoose from "mongoose";

const chartDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  amount: Number,
  purpose: String,
  time: String,
});

const ChartData = mongoose.model("ChartData", chartDataSchema);
export default ChartData;