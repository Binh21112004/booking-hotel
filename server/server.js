import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
// import { clerkMiddleware } from '@clerk/express' (debug)
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
// import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import clerkRoutes from "./routes/clerk.js";

import paymentRoutes from './routes/payment.js';

// import cancel book
import cancelBookingRoutes from './routes/cancelBookingRoutes.js'
const app = express();
connectDB()
connectCloudinary();
app.use(cors()) // Enable Cross-Origin Resource Sharing

// Middleware
app.use(express.json())
//
app.use(express.urlencoded({ extended: true }));
// app.use(clerkMiddleware())  (debug)
app.use(ClerkExpressWithAuth()); // ✅ đúng middleware
// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks);

app.use("/api/clerk", clerkRoutes);


app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => res.send("API is working"))
app.use('/api/user', userRouter)
// app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

// cancel booking
app.use('/api/bookings', cancelBookingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
