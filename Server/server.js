import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import roomRoutes from "./routes/roomRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import diningRoutes from "./routes/diningRoutes.js";
import spaRoutes from "./routes/spaRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Load .env only for local/dev when no environment-provided vars exist
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  // Prefer a Render-provided variable if you set it (avoids repo .env collisions)
  const rawEnv = process.env.RENDER_MONGO_URI || process.env.MONGO_URI || '';
  const MONGO_URI = rawEnv && rawEnv.trim().length > 0 ? rawEnv.trim() : undefined;

  if (!MONGO_URI || !(MONGO_URI.startsWith("mongodb://") || MONGO_URI.startsWith("mongodb+srv://"))) {
    console.error("Missing or invalid MONGO_URI. Set a valid connection string in Render as RENDER_MONGO_URI or MONGO_URI.");
    console.error("Example format: mongodb+srv://<user>:<password>@cluster0.px82pqe.mongodb.net/<dbname>?retryWrites=true&w=majority");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.RENDER_MONGO_URI, {});
    console.log("✅ MongoDB Connected");

    // register routes after DB is connected
    app.use("/api/rooms", roomRoutes);
    app.use("/api/bookings", bookingRoutes);
    app.use("/api/dining", diningRoutes);
    app.use("/api/spa", spaRoutes);
    app.use("/api/events", eventRoutes);
    app.use("/api/auth", authRoutes);

    app.get("/", (req, res) => res.send("Hotel API is running!"));
    app.get("/api", (req, res) => res.send("Hotel API is running!"));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo connection failed:", err);
    process.exit(1);
  }
};

start();
