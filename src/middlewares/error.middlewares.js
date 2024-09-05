import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statuCode =
      error.statuCode || error instanceof mongoose.Error ? 400 : 500;

    const message = error.message || "something went wrong";
    error = new ApiError(statuCode, message, error?.errors || [], err.stack);
  }

  const responce = {
    ...error,
    message: error.message,
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  return res.status(error.statuCode).json(responce);
};

export default { errorHandler };
