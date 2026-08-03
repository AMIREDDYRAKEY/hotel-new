import mongoose from "mongoose";

const diningSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String },
    cuisine: { type: String },
    hours: { type: String },
    dressCode: { type: String },
    image: { type: String, default: "" },
    description: { type: String },
    specialties: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Dining", diningSchema);
