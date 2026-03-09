// services related
import {
  registerUserService,
  loginUserService,
} from "../services/auth.services.js";

// controller for registering the user
export const registerUserController = async (req, res) => {
  // get the validation result from the middleware
  const validationResult = req.validationResult;

  // register the user using the service
  const user = await registerUserService(validationResult.data);

  // if user already exists(as the service returns undefined if user already exists)
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

// login user controller
export const loginUserController = async (req, res) => {
  try {
    // get the validation result from the middleware
    const validationResult = req.validationResult;

    // login the user using the service
    const token = await loginUserService(validationResult.data);

    return res.status(200).json({
      success: true,
      token,
      message: "user logged in successfully",
    });
  } catch (error) {
    // user doest not exist or password does not match
    return res.status(error.status ?? 500).json({
      success: false,
      message: error.message ?? "something went wrong",
    });
  }
};
