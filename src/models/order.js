import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

export const Order = mongoose.model("Order", orderSchema);
