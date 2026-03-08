// services related
import { registerUserService } from "../services/auth.services.js";

// controller for registering the user
export const registerUserController = async (req, res) => {
  // get the validation result from the middleware
  const validationResult = req.validationResult;

  // reqgister the user using the service
  const user = await registerUserService(validationResult.data);

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "user already exists" });
  }

  return res.status(201).json({
    success: true,
    data: user,
    message: "user registered successfully",
  });
};
