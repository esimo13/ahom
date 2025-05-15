import express from "express";
import { getAllOrders, getOrder, createOrder } from "../controllers/order.js";
import { auth } from "../middlewares/authmid.js";

const app = express.Router();

app.get("/", (req, res) => {
  res.json("api is working");
});

app.post("/", createOrder);

app.get("/find", auth, getAllOrders);

app.get("/find/:id", getOrder);

export default app;
