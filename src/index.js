import { app } from "./app.js";
import "dotenv/config";
import connectDB from "./db/index.js";
const port = process.env.PORT || 4000;

connectDB()
  .then((result) => {
    app.listen(port, () => {
      console.log(`server is running on ${port} `, result);
    });
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
  });
