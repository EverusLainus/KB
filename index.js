const express = require("express");
const app = express();
const authRouter = require("./routes/authRoutes");
const mongodbConnect = require("./db/connection");
mongodbConnect();
app.use(express.json());
app.use("/auth", authRouter);
app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});
