import express from 'express';
import { errorHandler } from './middleware/errorHandling.middleware.js';
import hospitalRoutes from './routes/hospital.routes.js';


const app = express();

app.use(express.json());

// routes
app.use("/api/hospitals", hospitalRoutes);


// error middleware
app.use(errorHandler);

export { app };