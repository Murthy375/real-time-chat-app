// express related
import express from "express";
const router = express.Router();

// middlewares related
import {
  validateRegisterRequest,
  validateLoginRequest,
} from "../middlewares/auth.validate.middleware.js";

// controllers related
import {
  registerUserController,
  loginUserController,
} from "../controllers/auth.controller.js";

router.post("/register", validateRegisterRequest, registerUserController);
router.post("/login", validateLoginRequest, loginUserController);

export default router;
