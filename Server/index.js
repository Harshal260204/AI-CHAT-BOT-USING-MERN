import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./database/database.js";
dotenv.config();

// Importing Routes:
import router from "./routes/userRoutes.js";

// Using Routes:
app.use('/api/user',userRoutes)

const app = express();

connectToDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Is Running ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
