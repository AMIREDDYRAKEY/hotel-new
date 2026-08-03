import express from "express";
import { getBookings, getMyBookings, addBooking, updateBooking } from "../controllers/bookingController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getBookings);
router.get("/mybookings", protect, getMyBookings);
router.post("/", protect, addBooking);
router.put("/:id", updateBooking);

export default router;
