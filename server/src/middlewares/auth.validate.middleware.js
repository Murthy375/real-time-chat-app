// validations related
import { registerPostRequestBodySchema } from "../validations/auth.validations.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

// validates the request body for the register endpoint
export const validateRegisterRequest = async (req, res, next) => {
  // validate the req.body
  const validationResult = await registerPostRequestBodySchema.safeParseAsync(
    req.body,
  );

  // error during validation
  if (!validationResult.success) {
    return res.status(400).json({ error: validationResult.error.format() });
  }

  req.validationResult = validationResult;
  next();
};
