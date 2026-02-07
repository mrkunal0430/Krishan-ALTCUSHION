import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/360kavach";

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL || "admin@360kavach.com",
  password: process.env.ADMIN_PASSWORD || "admin123",
};

async function seedAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const existing = await Admin.findOne({ email: DEFAULT_ADMIN.email });

    if (existing) {
      console.log(`Admin already exists: ${DEFAULT_ADMIN.email}`);
      console.log("Skipping seed.");
    } else {
      const admin = new Admin(DEFAULT_ADMIN);
      await admin.save();
      console.log("Default admin created successfully");
      console.log("Email:", DEFAULT_ADMIN.email);
      console.log("Password:", DEFAULT_ADMIN.password);
    }
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run directly: node adminSeed.js
seedAdmin();
