const express = require("express");
const bcrypt = require("bcryptjs");

const userModel = require("../models/userModel");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, password: hashedPassword, role });
    await user.save();
    res.send({ message: " registration success" });
  } catch (err) {
    console.log(err.message);
    res.send({ message: "error: registration" });
  }
});

authRouter.post("/login", async (req, res) => {
  const { name, password, role } = req.body;
  try {
    const user = await userModel.find({ name });
    if (!user) {
      return res.send({ message: "error: invalid username" });
    }
    const isCorrect = bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return res.send({ message: "error: invalid password" });
    }
    const token = bcrypt.sign({ id: user._is, role: user.role });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.send({ message: "error: login" });
  }
});

module.exports = authRouter;
