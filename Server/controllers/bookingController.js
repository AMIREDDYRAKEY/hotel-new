import Booking from "../models/Booking.js";

// Get All Bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get logged in user bookings
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add Booking
export const addBooking = async (req, res) => {
  try {
    req.body.user = req.user._id;
    const booking = await Booking.create(req.body);
    res.status(201).json({ success: true, message: "Booking Added", booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update Booking
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, message: "Booking Updated", booking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
