import express from "express";
import cors from "cors";
import { connectDB } from "./utils/features.js";
import orderRoutes from "./routes/order.js";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
