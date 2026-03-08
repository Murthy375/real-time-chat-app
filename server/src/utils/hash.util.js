// bcrypt related
import bcrypt from "bcrypt";

// hash password using bcrypt
export const hashPassword = (password) => {
  // hash the password with the salt
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  return hashedPassword;
};
