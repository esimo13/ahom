import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(400).json({ message: "Access denied broooo" });
  }

  const verified = jwt.verify(token, "supersecretkey123");
  req.user = verified;
  next();
};
