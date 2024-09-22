const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("connected to db");
  } catch (err) {
    console.log("error connecting to db", err);
  }
};

module.exports = mongodbConnect;
