import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model("users", userSchema);
