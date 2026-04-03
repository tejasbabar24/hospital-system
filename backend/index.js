import { config } from "dotenv";
config({ path: "./.env" }); // ✅ FIRST

import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";

// ✅ middleware after env loaded
app.use(
  cors({
    origin:"*",
  })
);

const PORT = process.env.PORT || 5000;

// ✅ connect DB then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });