const express = require("express");
const app = express();
const mongodbConnect = require("./db/connection");
mongodbConnect();
app.use(express.json());
app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});
