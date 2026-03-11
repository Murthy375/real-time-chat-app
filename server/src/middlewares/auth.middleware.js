// utils related
import { decodeToken } from "../utils/auth.util.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  //   if (!authHeader.startsWith("Bearer ")) {
  //     return res.status(401).json({ message: "invalid token format" });
  //   }

  //   const token = authHeader.split(" ")[1];

  // decoded token
  const user = decodeToken(token);

  if (!user) {
    return res.status(401).json({ message: "invalid token" });
  }

  req.user = user;
  next();
};
