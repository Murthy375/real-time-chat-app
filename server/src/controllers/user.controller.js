// services related
import { getUserByIdService } from "../services/user.services.js";

export const getUserByIdController = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await getUserByIdService(userId);

    return res.status(200).json({
      success: true,
      data: user,
      message: "user data fetched successfully",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
