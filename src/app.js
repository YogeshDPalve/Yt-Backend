import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.middlewares.js";


const app = express();

// ! common middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    exdended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser);

// ! import routes
import healthckeckRouter from "./routes/healthckeck.routes.js";
import userRouter from "./routes/user.routes.js";


// !Routes
app.use("/api/v1/healthckeck", healthckeckRouter);
app.use("/api/v1/users", userRouter);




app.use(errorHandler)
export { app };
