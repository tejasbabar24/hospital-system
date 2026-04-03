import express from 'express';

import { addHospital , getHospitals , getHospitalById } from '../controller/hospital.controller.js';

const router = express.Router();

router.post("/", addHospital);
router.get("/", getHospitals);
router.get("/:id", getHospitalById);

export default router;