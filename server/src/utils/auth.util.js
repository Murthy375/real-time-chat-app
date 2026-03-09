// dotenv related
import "dotenv/config.js";

// bcrypt related
import bcrypt from "bcrypt";

// jsonwebtoken related
import jwt from "jsonwebtoken";

// hash password using bcrypt
export const hashPassword = (password) => {
  // hash the password with the salt
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  return hashedPassword;
};

// de-hash and compare passwords via bcrypt
export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

// generate jwt token
export const generateJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
};
