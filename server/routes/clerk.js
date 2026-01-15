import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/user-created", async (req, res) => {
  try {
    const { id, email_addresses, first_name, last_name } = req.body;
    const email = email_addresses?.[0]?.email_address;

    const existingUser = await User.findOne({ clerkId: id });
    if (existingUser) return res.status(200).send("User already exists");

    // ✅ Gán mặc định role = "customer"
    await User.create({
      clerkId: id,
      name: `${first_name} ${last_name}`,
      email,
      role: "customer",
      recentSearchedCities: [],
    });

    res.status(201).send("User created");
  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

export default router;