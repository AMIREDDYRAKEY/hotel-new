import mongoose from "mongoose";

const spaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: String },
    price: { type: String },
    tagline: { type: String },
    image: { type: String, default: "" },
    description: { type: String },
    benefits: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Spa", spaSchema);
