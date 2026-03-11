// db related
import { User } from "../models/user.model.js";

export const getUserByIdService = async (userId) => {
  const user = await User.findById(userId).select(
    "_id name firstName lastName email createdAt updatedAt",
  );
  return user;
};
