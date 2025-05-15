import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "ahom" });
    console.log("MONGODB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
