import Dining from "../models/Dining.js";

export const getDinings = async (req, res) => {
  try {
    const dinings = await Dining.find().sort({ createdAt: -1 });
    res.status(200).json(dinings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addDining = async (req, res) => {
  try {
    const dining = await Dining.create(req.body);
    res.status(201).json({ success: true, message: "Dining Added", dining });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateDining = async (req, res) => {
  try {
    const dining = await Dining.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dining) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Dining Updated", dining });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteDining = async (req, res) => {
  try {
    const dining = await Dining.findByIdAndDelete(req.params.id);
    if (!dining) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Dining Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
