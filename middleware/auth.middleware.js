const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const dotenv = require("dotenv");
dotenv.config();

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.send({ message: "error getting token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).send({ message: "not authenticated" });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res.status(403).json({ message: "forbidden" });
    }
  };
};

module.exports = { authenticateUser, authorizeRoles };
