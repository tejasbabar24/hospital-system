import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔐 Protected Route Example
router.get("/profile", protect, (req, res) => {
  res.json(new ApiResponse(200, req.user, "User profile fetched"));
});

export default router;