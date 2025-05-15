import { User } from "../models/user.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

//register user

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashedPass });

  await newUser.save();

  res.status(201).json({ newUser });
};

//login user

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    res.status(400).json({ message: "User does not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401).json({ message: "Wrong credentials" });
  }

  const token = jwt.sign({ id: user._id }, "supersecretkey123", {
    expiresIn: "2h",
  });

  res.json({ token, username: user.username });
};
