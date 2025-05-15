import { Order } from "../models/order.js";

export const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};

export const createOrder = async (req, res) => {
  const { title, price } = req.body;

  const newOrder = new Order({ title, price });

  await newOrder.save();

  res.status(201).json(newOrder);
};
