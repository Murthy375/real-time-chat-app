// db related
import { User } from "../models/user.model.js";

// utils related
import {
  hashPassword,
  comparePassword,
  generateJwtToken,
} from "../utils/auth.util.js";

// find user by email
const findUserByEmail = async (email) => {
  const existingUser = await User.findOne({ email }).select(
    "_id name firstName lastName email password createdAt updatedAt",
  );

  // if user does not exist
  if (!existingUser) {
    return;
  }

  return {
    id: existingUser._id,
    name: existingUser.name,
    firstName: existingUser.firstName,
    lastName: existingUser.lastName,
    email: existingUser.email,
    password: existingUser.password,
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

// register user service
export const registerUserService = async (data) => {
  // check if the user already exists
  const existingUser = await findUserByEmail(data.email);

  // if user already exists
  if (existingUser) {
    const error = new Error("user already exists");
    error.status = 409;
    throw error;
  }

  // create the user
  const user = await createUser(data);

  return user;
};

// login user service
export const loginUserService = async (data) => {
  // check if the user already exists
  const existingUser = await findUserByEmail(data.email);

  // user does not exist
  if (!existingUser) {
    const error = new Error("user does not exist");
    error.status = 400;
    throw error;
  }

  // de-hash and compare passwords via bcrypt
  const isPasswordMatch = comparePassword(data.password, existingUser.password);

  // password does not match
  if (!isPasswordMatch) {
    const error = new Error("password does not match");
    error.status = 401;
    throw error;
  }

  // generate jwt token
  const token = generateJwtToken({
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    createdAt: existingUser.createdAt,
  });

  return token;
};
