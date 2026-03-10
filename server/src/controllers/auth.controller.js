// services related
import {
  registerUserService,
  loginUserService,
} from "../services/auth.services.js";

// controller for registering the user
export const registerUserController = async (req, res) => {
  try {
    // get the validation result from the middleware
    const validationResult = req.validationResult;

    // register the user using the service
    const user = await registerUserService(validationResult.data);

    // if user already exists
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
  } catch (error) {
    return res.status(error.status ?? 500).json({
      success: false,
      message: error.message ?? "something went wrong",
    });
  }
};

// login user controller
export const loginUserController = async (req, res) => {
  try {
    // get the validation result from the middleware
    const validationResult = req.validationResult;

    // login the user using the service
    const token = await loginUserService(validationResult.data);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // here if app is deployed, then secure should be true, otherwise false
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
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
