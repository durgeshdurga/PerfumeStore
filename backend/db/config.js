import mongoose from "mongoose";

// Database connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected.");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
