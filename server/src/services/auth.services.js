// db related
import { User } from "../models/user.model.js";

// utils related
import { hashPassword } from "../utils/hash.util.js";

// find user by email
const findUserByEmail = async (email) => {
  const existingUser = await User.findOne({ email }).select("_id name");

  // if user does not exist
  if (!existingUser) {
    return;
  }

  return {
    id: existingUser._id,
    name: existingUser.name,
  };
};

// create user
const createUser = async (data) => {
  const { name, firstName, lastName, email, password } = data;

  const hashedPassword = hashPassword(password);

  const user = await User.insertOne({
    name,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
};

// service for registering the user
export const registerUserService = async (data) => {
  // check if the user already exists
  const existingUser = await findUserByEmail(data.email);

  // if user already exists
  if (existingUser) {
    return;
  }

  // create the user
  const user = await createUser(data);

  return user;
};
