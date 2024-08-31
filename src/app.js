import express, { json } from "express";
import cors from "cors";
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

// ! import routes
import healthckeckRouter from "./routes/healthckeck.routes.js";

// Routes
app.use("/api/v1/healthckeck", healthckeckRouter);

export { app };
