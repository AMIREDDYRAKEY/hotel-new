import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    occupancy: {
      type: String,
      default: "",
    },
    bed: {
      type: String,
      default: "",
    },
    view: {
      type: String,
      default: "",
    },
    wifi: {
      type: String,
      default: "Free High-Speed Wi-Fi",
    },
    amenities: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["Available", "Occupied", "Maintenance"],
      default: "Available",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;