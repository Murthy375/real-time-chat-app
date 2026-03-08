// express related
import express from "express";
const router = express.Router();

// middlewares related
import { validateRegisterRequest } from "../middlewares/auth.validate.middleware.js";

// controllers related
import { registerUserController } from "../controllers/auth.controller.js";

router.post("/register", validateRegisterRequest, registerUserController);

export default router;
