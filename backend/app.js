import express from 'express';
import { errorHandler } from './middleware/errorHandling.middleware.js';
import hospitalRoutes from './routes/hospital.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from "cors";

const app = express();

// ✅ CORS FIRST
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// ✅ Handle preflight - REMOVED: cors handles this automatically


app.use(express.json());

// routes
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/auth", authRoutes);


// error middleware
app.use(errorHandler);

export { app };