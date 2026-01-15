import express from 'express';
import protect from '../middleware/authMiddleware.js';
import Booking from '../models/Booking.js';
const router = express.Router();

router.put('/cancel/:id', protect, async (req, res) => {
  try {
    const bookingId = req.params.id;

    const updated = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "cancelled" },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    res.json({ success: true, message: "Booking cancelled", booking: updated });
  } catch (err) {
    console.error("❌ Cancel booking error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
