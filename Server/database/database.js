import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("Error Connecting DB");
  }
};
