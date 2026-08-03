import Spa from "../models/Spa.js";

export const getSpas = async (req, res) => {
  try {
    const spas = await Spa.find().sort({ createdAt: -1 });
    res.status(200).json(spas);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addSpa = async (req, res) => {
  try {
    const spa = await Spa.create(req.body);
    res.status(201).json({ success: true, message: "Spa Added", spa });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!spa) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Spa Updated", spa });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteSpa = async (req, res) => {
  try {
    const spa = await Spa.findByIdAndDelete(req.params.id);
    if (!spa) return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Spa Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
