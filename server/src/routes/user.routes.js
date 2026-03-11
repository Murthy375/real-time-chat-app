// express related
import express from "express";
const router = express.Router();

// middlewares related
import { authMiddleware } from "../middlewares/auth.middleware.js";

// controllers related
import { getUserByIdController } from "../controllers/user.controller.js";

router.get("/profile", authMiddleware, getUserByIdController);

export default router;
