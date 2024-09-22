const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

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
    const user = await userModel.findOne({ name });
    if (!user) {
      return res.send({ message: "error: invalid username" });
    }
    console.log(user);
    console.log(typeof user.password);
    const isCorrect = await bcrypt.compare(password, user.password);
    console.log(isCorrect);
    if (!isCorrect) {
      return res.send({ message: "error: invalid password" });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.jwt_secret,
      {
        expiresIn: "1 hour",
      }
    );
    console.log(token);
    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    return res.send({ message: "error: login" });
  }
});

module.exports = authRouter;
