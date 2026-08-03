import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    capacity: { type: String },
    size: { type: String },
    image: { type: String, default: "" },
    description: { type: String },
    features: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
